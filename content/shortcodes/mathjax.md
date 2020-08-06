---
title: "LaTeX math formatting"
description: |
  You control your application and the way it will be built and deployed on Platform.sh via a single configuration file, `.platform.app.yaml`, located at the root of your application folder inside your Git repository.
sidebarTitle: "Apps (.platform.app.yaml)"
---

## Usage

{{< localcode file="static/files/shortcodes/mathjax.txt" lang="html" >}}

## Result

{{< tex >}}
\frac{f(x+\Delta x)-f(x)}{\Delta x}
   \overset{\Delta x\to 0}{\longrightarrow}
f'(x)
{{< /tex >}}

## Source

{{< localcode file="layouts/shortcodes/tex.html" lang="html" >}}

## Styles

{{< localcode file="static/css/components/mathjax.css" lang="css" >}}

## Additional examples

This is a small sample of expressions currently in the documentation that could be replaced by the use of MathJax:

### [Varnish: How it works](https://docs.platform.sh/configuration/services/varnish.html#how-it-works)

All incoming requests still go through the environment’s router first. When using Varnish, a Varnish service sits between the router and the application server or servers.

{{< tex >}}
\text{web}\hspace{0.25cm}\xrightarrow{\hspace{0.75cm}}\hspace{0.25cm}\text{router}\hspace{0.25cm}\xrightarrow{\hspace{0.75cm}}\hspace{0.25cm}\text{varnish}\hspace{0.25cm}\xrightarrow{\hspace{0.75cm}}\begin{cases} \hspace{0.25cm}\text{application1} \\ \hspace{0.25cm}\text{application2} \end{cases}
{{< /tex >}}

### [Going live, CDN, Cloudflare: Enable “Full SSL” option in the Cloudflare admin](https://docs.platform.sh/golive/cdn/cloudflare.html#enable-full-ssl-option-in-the-cloudflare-admin)

This means that traffic to your site is encrypted from the client (browser) to Cloudflare’s servers using their certificate, and also between Cloudflare’s servers and your project hosting here at Platform.sh, mostly like using your project’s Let’s Encrypt certificate.

{{< tex  >}}
\displaylines{\textbf{Cloudflare's Full SSL option:} \\ \hspace{1cm} \\ \text{user}\hspace{0.5cm}\overset{\text{https}}{\xleftarrow{\hspace{1cm}}\xrightarrow{\hspace{1cm}}}\hspace{0.5cm}\text{Cloudflare}\hspace{0.5cm} \overset{\text{https}}{\xleftarrow{\hspace{1cm}}\xrightarrow{\hspace{1cm}}}\hspace{0.5cm}\text{Platform.sh}}
{{< /tex >}}

The other option known as “Flexible SSL” will cause issues if you intend to redirect all traffic to HTTPS. The “Flexible SSL” option will use Cloudflare’s TLS/SSL certificate to encrypt traffic between your users and the CDN, but will pass requests from the CDN back to your project at Platform.sh via HTTP. This can make it easy for sites that don’t have a TLS/SSL certificate to begin ofering their users a more secure experience, by at the least eliminating the unencrypted attack vector on the the “last mile” to the user’s browser.

{{< tex  >}}
\displaylines{\textbf{Cloudflare's Flexible SSL option:} \\  \hspace{1cm} \\ \text{user}\hspace{0.5cm}\overset{\text{https}}{\xleftarrow{\hspace{1cm}}\xrightarrow{\hspace{1cm}}}\hspace{0.5cm}\text{Cloudflare}\hspace{0.5cm} \overset{\text{http}}{\xleftarrow{\hspace{1cm}}\xrightarrow{\hspace{1cm}}}\hspace{0.5cm}\text{Platform.sh}}
{{< /tex >}}

### [PHP-FPM sizing: The heuristic](https://docs.platform.sh/languages/php/fpm.html#the-heuristic)

The number of workers is calculated as:

{{< tex  >}}
\text{workers} = \text{max} \Big( \frac{\text{ContainerMemory} - \text{ReservedMemory}}{\text{RequestMemory}} ,2 \Big)
{{< /tex >}}
