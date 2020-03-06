---
title: "Alerts"
---

# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

---

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](https://getbootstrap.com/docs/4.3/components/alerts/#dismissing).

{{< alert theme="primary" >}}This is a primary alert — check it out!{{< /alert >}}
{{< alert theme="secondary" >}}This is a secondary alert — check it out!{{< /alert >}}
{{< alert theme="success" >}}This is a success alert — check it out!{{< /alert >}}
{{< alert theme="danger" >}}This is a danger alert — check it out!{{< /alert >}}
{{< alert theme="warning" >}}This is a warning alert — check it out!{{< /alert >}}
{{< alert theme="info" >}}This is a info alert — check it out!{{< /alert >}}
{{< alert theme="dark" >}}This is a dark alert — check it out!{{< /alert >}}

{{< callout theme="warning" >}}
#### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.
{{< /callout >}}


## Icons

{{< alert theme="primary" icon="peace" >}}This is a primary alert — check it out!{{< /alert >}}
{{< alert theme="secondary" icon="thumbs-up" >}}This is a secondary alert — check it out!{{< /alert >}}
{{< alert theme="danger" icon="hand-pointer" >}}This is a danger alert — check it out!{{< /alert >}}
{{< alert theme="dark" icon="handshake" >}}This is a dark alert — check it out!{{< /alert >}}

## Javascript behavior

For more information, see the official [Bootstrap documentation](https://getbootstrap.com/docs/4.3/components/alerts/#javascript-behavior).
