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
Host github.com
    HostName ssh.github.com
    IdentityFile ~/.ssh/id_ed25519_github
    User git

Host private.git.server.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/key_file_for_this
```

Then you need to configure the git client `.gitconfig`

```txt
[includeIf "gitdir:~/code/github/"]     
        path = ~/.gitconfigs/github
```

Where `~/.gitconfigs/github` contains the username and email for your github account.

```txt
[user]
        name = thatmlopsguy
        email = 165834479+thatmlopsguy@users.noreply.github.com
```

This way, every git repo cloned with ssh located at `~/code/github` will work.

For now, that's it. Feel free to check my [dotfiles](https://github.com/thatmlopsguy/dotfiles).
