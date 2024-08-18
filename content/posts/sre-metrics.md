+++
title = 'Beyond MTTR: Rethinking Recovery Metrics for Enhanced Software Performance'
date = 2024-08-13
draft = false
tags = ['sre', 'mttr']
+++

Let's delve into the reasons why focusing solely on [Mean Time To Recovery](https://en.wikipedia.org/wiki/Mean_time_to_recovery)
(MTTR) might not be the most effective metric for evaluating software delivery performance.

In recent years, the [DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/), including "Time to Restore Service" or MTTR,
have become a staple among software engineers aiming to measure the efficiency of software delivery processes. However, Courtney
Nash challenged this conventional wisdom in her article [“MTTR is a Misleading Metric—Now What?”](https://www.verica.io/blog/mttr-is-a-misleading-metric-now-what/), arguing that MTTR oversimplifies the recovery process. Her critique resonates strongly with me.

Measures like the mean fail to accurately represent positively-skewed datasets. These datasets typically exhibit most values
clustering around the lower end, with a long tail extending towards higher values. The presence of outliers significantly impacts
the mean, rendering it an unreliable indicator in such cases.

![](https://www.verica.io/wp-content/uploads/VOID-MTTRCharts-1000x600-GoogleMean-Median.png)
*Image credits: [MTTR is a Misleading Metric—Now What?](https://www.verica.io/blog/mttr-is-a-misleading-metric-now-what/)*

Nash pointed out that relying on the mean to gauge recovery times offers little practical value. This is akin to the
limitations observed when using averages to assess latency in software engineering. Instead, percentiles emerge as a
superior metric for recovery time analysis. Essentially, recovery time parallels latency, albeit on a scale of minutes or hours
rather than milliseconds or seconds, indicating the duration required to rectify an issue. Our objective is to ascertain whether
the recovery time for 95% of incidents is decreasing, a detail that the mean fails to illuminate.

Organizations should stop using MTTX data as indicators of organizational performance.
Primarily, if your organization is tracking this metric, it's crucial to visualize the distribution of your incident data.

Mean Time To Recovery (MTTR) serves as a quintessential illustration of [Goodhart's Law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
Goodhart's Law posits that "when a measure becomes a target, it ceases to be a good measure," implying that the act of focusing
solely on a single metric can lead to unintended consequences.

Companies aiming to decrease recovery times might unknowingly create a situation that mirrors the [Tragedy of the Commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons). The relentless quest to shorten recovery periods can unintentionally promote behaviors
that erode the system's long-term reliability and ignore crucial elements necessary for operational excellence.
Analogous to the overgrazing of shared land due to individual self-interest, teams may hastily implement fixes without thoroughly
investigating root causes, akin to short-sighted herdsmen prioritizing immediate gain over the health of the common pasture.
This approach leads to a cycle of recurring issues, mirroring the degradation of the commons through overuse. Consequently, the
relentless drive to reduce MTTR can paradoxically result in an increase in overall system downtime, illustrating how individual
efforts to optimize a specific metric can detrimentally impact collective goals and system sustainability.

In conclusion, transitioning to the use of percentiles for analyzing recovery times presents a significant opportunity for
organizations to gain a more accurate and insightful understanding of their software incident management processes.
By moving away from traditional metrics like Mean Time To Recovery (MTTR), which can mask the true nature of recovery efforts,
percentiles allow for a more granular view of performance. This approach not only provides a clearer picture of how quickly issues
are resolved across a range of incidents but also enables organizations to set more realistic and meaningful targets for improvement.

Ultimately, embracing percentiles as a key metric fosters a culture of continuous learning and adaptation, better equipping teams
to navigate the complexities of modern software development.

# References

- [Incident Metrics in SRE:Critically Evaluating MTTR and Friends](https://static.googleusercontent.com/media/sre.google/en//static/pdf/IncidentMeticsInSre.pdf)
