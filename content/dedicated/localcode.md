---
title: "Pulling snippets from a local file"
description: |
  You control your application and the way it will be built and deployed on Platform.sh via a single configuration file, `.platform.app.yaml`, located at the root of your application folder inside your Git repository.
sidebarTitle: "Apps (.platform.app.yaml)"
---

## Usage

To get the local shortcode template `layouts/shortcodes/github.html`:

{{< localcode file="static/files/shortcodes/localcode.txt" lang="html" >}}

## Result

{{< localcode file="layouts/shortcodes/github.html" lang="html" >}}

## Source

{{< localcode file="layouts/shortcodes/localcode.html" lang="html" >}}
