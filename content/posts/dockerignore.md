+++
title = 'Ignore Files Across All Subdirectories in .dockerignore'
date = 2024-07-01
draft = false
tags = ['docker']
+++

When you're using `.dockerignore` to ignore files within directories, it works a little differently than `.gitignore`.

To ignore a file across all subdirectories, prefix the filename with `**`. For example, to ignore the file `file.txt`
in all subdirectories, add the following to `.dockerignore`:

```sh
**file.txt
```

To ignore a specific file extension across all subdirectories, prefix the file extension with **/*. 
In this example, all files with the `.txt` extension will be ignored by Docker:

```sh
**/*.txt
```

Also, keep in mind that `.dockerignore` should be in the root of the context you are passing in to Docker
or it won’t be taken into account.
