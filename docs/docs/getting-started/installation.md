---
title: 'Installation'
---

## Prerequisites

STRUDEL Kit requires Python to run the CLI and Node.js with NPM to run the web applications you build. If you don't already have these tools on your system, use the links below to install them:

- [Python 3.8+](https://www.python.org/downloads/)
- [Node.js 18+ with NPM](https://nodejs.org/en/download)

## Install strudel-cli with pip

The strudel-cli can be installed from PyPi via the `pip` package installer for Python.

It is recommended that **before** you install strudel-cli, you use either conda or pipx to install it inside of an isolated virtual environment. See below how to install strudel-cli using either of these options.

### Install strudel-cli inside a conda environment

Run the following commands on the command line:

```
conda create -y -n strudel-cli-env -c python pip
conda activate strudel-cli-env
pip install strudel-cli
```

After executing the above commands, the `strudel` command can be used on any command line where you activate `strudel-cli-env`.

### Install strudel-cli using pipx

pipx is an extension of pip that will install command-line tools in isolated environments so you can safely run them from any terminal. Install pipx by following the [instructions in their documentation](https://pipx.pypa.io/stable/installation/).

Once you have pipx installed, run the following command on the command line:

```
pipx install strudel-cli
```

After completing the above, the `strudel` command can be used on any command line for the current user.

## Install strudel-cli from GitHub

If you want the freshly baked code right from the main repository instead, use the following recipe:

```
# note: use only if you want 'freshly baked' code from GitHub main branch
git clone https://github.com/strudel-science/strudel-kit
pip install strudel-kit/strudel-cli
```