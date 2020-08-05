---
title: "Pulling snippets from GitHub"
description: |
  You control your application and the way it will be built and deployed on Platform.sh via a single configuration file, `.platform.app.yaml`, located at the root of your application folder inside your Git repository.
sidebarTitle: "Apps (.platform.app.yaml)"
---

## Usage

To pull the file [https://github.com/platformsh/language-examples/blob/master/golang/examples/postgresql.go](https://github.com/platformsh/language-examples/blob/master/golang/examples/postgresql.go):

{{< localcode file="static/files/shortcodes/github.txt" lang="html" >}}

## Result

{{< github repo="platformsh/language-examples" file="/golang/examples/postgresql.go" lang="go" >}}

## Source

{{< localcode file="layouts/shortcodes/github.html" lang="html" >}}
