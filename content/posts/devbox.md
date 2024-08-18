+++
title = 'I replaced Homebrew and asdf with Devbox'
date = 2024-05-21
draft = false
tags = ['nix', 'asdf', 'homebrew']
+++

In the last years, I used a combination of [homebrew](https://brew.sh/)
and [asdf](https://asdf-vm.com/) to manage some developer tools
(eg. terraform, hadolint, ShellCheck, ...)

Recently I discovered [devbox](https://jetpack.io/devbox/), a wrapper around NixOS package manager.

First [install Devbox](https://www.jetify.com/devbox/docs/installing_devbox/):

```bash
curl -fsSL https://get.jetify.com/devbox | bash
```

Now, everytime I initialize a new project, instead of installing asdf plugins and
declare it on `.tool-versions`, I just add the dependencies on `devbox.json` on the
root of each project. First I run

```bash
devbox init
```

To create an empty `devbox.json` in the project directory.

Here it is an example for a [python](https://www.jetify.com/devbox/docs/devbox_examples/languages/python/)
project using poetry to manage python packages.

```json
{
  "packages": [
    "python@latest",
    "poetry@latest"
  ],
  "shell": {
    "init_hook": [
      "poetry install"
    ],
    "scripts": {
      "run_test": "poetry run python -m poetry_demo",
      "test": "poetry run pytest"
    }
  }
}
```

Since I use VSCode, I installed the extension [devbox by Jetify](https://marketplace.visualstudio.com/items?itemName=jetpack-io.devbox).
This way, when VSCode terminal is opened on a devbox project, this extension detects `devbox.json`
and runs `devbox shell` so terminal is automatically in devbox shell environment.
If you use other IDE, devbox can integrate with `direnv` to automatically activate your
shell and packages when you navigate to your project.

To install some tool system-wide, like `ripgrep`, use the following command:

```bash
devbox global add ripgrep
```

To see what packages you already have installed:

```bash
devbox global ls
```
