+++
title = 'Optimizing PyTorch Docker images'
date = 2024-08-13
draft = false
tags = ['docker']
+++

You don't need CUDA runtime because PyTorch includes all the necessary CUDA binaries, so you can save space by switching
to a lighter base image. A one-line change brings 2 gigs of saved space:

```
# FROM nvidia/cuda:11.8.0-cudnn8-runtime-ubuntu22.04
FROM nvidia/cuda:11.8.0-base-ubuntu22.04
```

Source: [Optimizing PyTorch Docker images: how to cut size by 60%](https://mveg.es/posts/optimizing-pytorch-docker-images-cut-size-by-60percent/)
