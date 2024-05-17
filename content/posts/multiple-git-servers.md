+++
title = 'Setup SSH keys from multiple Git accounts'
date = 2024-05-15
draft = false
+++

I generally create new SSH keys for each separate git server using the following setup:

```bash
ssh-keygen -t ed25519 -a 100
```

Unfortunately, Git doesn't provide an option for what keys to use, you have to configure
this in the `~/.ssh/config` file:

```txt
# Personal account 
Host github.com
    HostName ssh.github.com
    IdentityFile ~/.ssh/id_ed25519_github
    User git

# Company account
Host gitcompany
    Hostname ssh.github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_company

Host private.git.server.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/key_file_for_this
```

Starting from `git` version 2.13+, you can use conditional include in your `.gitconfig` file.

```txt
[includeIf "gitdir:~/code/github/"]     
        path = ~/.gitconfigs/github

[includeIf "gitdir:~/code/work/"]
  	    path = ~/.gitconfigs/work
```

Where `~/.gitconfigs/github` contains the username and email for your github account.

```txt
[user]
        name = thatmlopsguy
        email = 165834479+thatmlopsguy@users.noreply.github.com
```

This way, every git repo cloned with ssh located at `~/code/github` will work.

To find out which account tries to authenticate with GitHub, when you clone a repository, is pretty trivial:

```bash
$ ssh -T git@github.com
Hi thatmlopsguy! You've successfully authenticated, but GitHub does not provide shell access.
```

To clone a repository from your work company:

```bash
git clone git@gitcompany/<repo_name>
```

For now, that's it. Feel free to check my [dotfiles](https://github.com/thatmlopsguy/dotfiles).
