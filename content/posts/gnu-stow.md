+++
title = 'Manage dotfiles with GNU Stow'
draft = false
+++

I use [GNU stow](https://www.gnu.org/software/stow/) to manage all the important [dotfiles](https://dotfiles.github.io/).

# Instructions

1. Create a repo called `dotfiles` in your `$HOME` directory
2. Recreate the directory structure for the files you want to manage as subdir(s) of that directory.

```bash
mkdir -p ~/.dotfiles/bash
mv ~/.bashrc ~/.bash_logout ~/.dotfiles/bash
cd ~/.dotfiles
stow bash
```

Stow will create symlink for each file.

```bash
.bashrc -> dotfiles/bash/.bashrc
```

Don´t forget to add this file to your git repo. Commit and push to remote and your done.
