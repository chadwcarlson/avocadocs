---
title: "Notes"
description: |
  You control your application and the way it will be built and deployed on Platform.sh via a single configuration file, `.platform.app.yaml`, located at the root of your application folder inside your Git repository.
---

## Usage

{{< localcode file="static/files/shortcodes/note.txt" lang="html" >}}

## Result

{{< note >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam `non tellus et` enim feugiat scelerisque id quis ex.
{{< /note >}}

{{< note type="info">}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam `non tellus et` enim feugiat scelerisque id quis ex.
{{< /note >}}

{{< note type="warning">}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam `non tellus et` enim feugiat scelerisque id quis ex.
{{< /note >}}

{{< note type="danger">}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam `non tellus et` enim feugiat scelerisque id quis ex.
{{< /note >}}

{{< note type="tiered">}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam `non tellus et` enim feugiat scelerisque id quis ex.
{{< /note >}}

## Source

{{< localcode file="layouts/shortcodes/note.html" lang="html" >}}

## Styles

{{< localcode file="static/css/components/blockquote.css" lang="css" >}}
