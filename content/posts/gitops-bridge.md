+++
title = 'Bridging the Gap: Implementing GitOps Bridge Pattern with Kind'
date = 2025-02-16
draft = false
tags = ['gitops', 'terraform', 'argocd']
+++

As I reflect on my journey implementing the GitOps Bridge pattern, I've learned that it's not just another technical solution,
it's a fundamental shift in how we manage our Kubernetes infrastructure. My experience began with a simple goal: to bridge the
gap between creating Kubernetes clusters and managing them through GitOps.

Traditional approaches to Kubernetes management often create a disconnect between two critical phases: the infrastructure
provisioning, where you create and configure the Kubernetes clusters using an IaC tool like terraform, and the addons/application
management, where you deploy the required applications within those clusters: monitoring, compliance and security addons.

This separation leads to several challenges:

- Configuration drift between infrastructure and applications
- Complex metadata management for cloud resources
- Difficulty maintaining consistent states across systems
- Challenges in handling workload identities and security configurations

![gitops_bridge](https://raw.githubusercontent.com/gitops-bridge-dev/gitops-bridge/main/argocd/iac/terraform/examples/eks/getting-started/static/gitops-bridge.drawio.png)

The GitOps Bridge transforms the traditional flow of infrastructure management. Terraform creates cloud resources and stores
their configuration metadata (such as account IDs and role ARNs) in a ArgoCD secret.

```sh
kubectl get secret -n argocd -l argocd.argoproj.io/secret-type=cluster -o json | jq '.items[0].metadata.annotations'
```

The output looks like the following:

```sh
{
  "addons_repo_basepath": "gitops",
  "addons_repo_path": "addons",
  "addons_repo_revision": "dev",
  "addons_repo_url": "https://github.com/thatmlopsguy/k8s-homelab",
  "cluster_name": "main",
  "environment": "prod"
}
```

This metadata serves as the bridge between infrastructure and applications. The GitOps engine, in this case ArgoCD, retrieves
this stored metadata and uses it to deploy Helm charts within the Kubernetes cluster, ensuring that applications have the necessary
configurations to interact with external cloud resources.

```yaml
---
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: addons-kro
spec:
  syncPolicy:
    preserveResourcesOnDeletion: true
  generators:
    - merge:
        mergeKeys: [server]
        generators:
          - clusters:
              values:
                addonChart: kro
                addonChartVersion: 0.2.1
                addonChartRepository: ghcr.io/kro-run/kro
              selector:
                matchExpressions:
                # only install kro if the terraform variable enable_kro is true
                  - key: enable_kro
                    operator: In
                    values: ['true']
          - clusters:
              selector:
                matchLabels:
                  environment: dev
              values:
                addonChartVersion: 0.2.1
          - clusters:
              selector:
                matchLabels:
                  environment: prod
              values:
                addonChartVersion: 0.2.1
  template:
    metadata:
      name: addon-{{name}}-{{values.addonChart}}
    spec:
      project: addons
      sources:
        - repoURL: '{{metadata.annotations.addons_repo_url}}'
          targetRevision: '{{metadata.annotations.addons_repo_revision}}'
          ref: values
        - chart: '{{values.addonChart}}'
          repoURL: '{{values.addonChartRepository}}'
          targetRevision: '{{values.addonChartVersion}}'
          helm:
            releaseName: '{{values.addonChart}}'
            ignoreMissingValueFiles: true
            valueFiles:
              - $values/environments/default/addons/{{values.addonChart}}/values.yaml
              - $values/environments/{{metadata.labels.environment}}/addons/{{values.addonChart}}/values.yaml
              - $values/clusters/{{name}}/addons/{{values.addonChart}}/values.yaml
            # if you need to pass variables from the argocd secret
            #values: |
            #  region: {{metadata.annotations.aws_region}}
            #  serviceAccount:
            #    name: {{metadata.annotations.service_account}}
            #    annotations:
            #        eks.amazonaws.com/role-arn: {{metadata.annotations.iam_role_arn}}

      destination:
        namespace: '{{values.addonChart}}'
        name: '{{name}}'
      syncPolicy:
        automated: {}
        syncOptions:
          - CreateNamespace=true
```

My implementation journey began with a Kind cluster, which proved to be the perfect environment for learning and experimentation.
I chose Kind because it runs entirely on my local machine, providing complete isolation while still offering all the features needed
to test complex GitOps patterns. The Kind cluster became my playground for understanding how metadata flows between different systems
and how the GitOps Bridge pattern maintains consistency across infrastructure and applications.

One of the most valuable insights I gained was how the GitOps Bridge handles cloud service integrations. Even though I was working with
a local Kind cluster, I could simulate many of the challenges that arise in production environments. The bridge pattern helped me manage
workload identities and resource configurations in a way that would scale seamlessly to cloud-managed clusters later.

Once I implemented the GitOps Bridge pattern, everything fell into place. The bridge pattern became the glue that held
everything together, ensuring that the infrastructure and application configurations remained synchronized.

Looking back, implementing the GitOps Bridge pattern was less about technology and more about understanding the flow of information in
the infrastructure. It taught me that successful GitOps isn't just about automation – it's about creating a clear, maintainable path for
configuration changes to flow through your entire system.

My implementation of the GitOps Bridge pattern is available in my kubernetes homelab [here](https://github.com/thatmlopsguy/k8s-homelab).
