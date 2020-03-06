---
title: "Reading local files"
weight: 4
description: reading local files is super simple.
---

# Reading local files

{{< tabs "Text" "HTML" "YAML" "Go" "Java" "Node" "PHP" "Python" >}}

{{< tab id="Text" active="true" >}}
{{< syntaxtest file="misc/lorem.md" markdownify="true">}}
{{< /tab >}}

{{< tab id="HTML" >}}
{{< highlight html >}}
{{< syntaxtest file="misc/basic.html" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="YAML" >}}
{{< highlight yaml >}}
{{< syntaxtest file="fetch/appyaml/pyramid" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="Go" >}}
{{< highlight go >}}
{{< syntaxtest file="fetch/examples/golang/mysql" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="Java" >}}
{{< highlight java >}}
{{< syntaxtest file="fetch/examples/java/mysql" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="Node" >}}
{{< highlight js >}}
{{< syntaxtest file="fetch/examples/nodejs/mysql" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="PHP" >}}
{{< highlight php >}}
{{< syntaxtest file="fetch/examples/php/mysql" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="Python" >}}
{{< highlight python >}}
{{< syntaxtest file="fetch/examples/python/mysql" >}}
{{< /highlight >}}
{{< /tab >}}

{{< /tabs >}}

```yaml
crons:
    backup:
        # Take a backup automatically every night at 3 am (UTC).
        spec: '0 3 * * *'
        cmd: |
            if [ "$PLATFORM_BRANCH" = master ]; then
                platform backup:create --yes --no-wait
            fi
    renewcert:
        # Force a redeploy at 8 am (UTC) on the 14th and 28th of every month.
        spec: '0 8 14,28 * *'
        cmd: |
            if [ "$PLATFORM_BRANCH" = master ]; then
                platform redeploy --yes --no-wait
            fi
```
