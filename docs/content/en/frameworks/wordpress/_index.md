---
title: "Wordpress"
weight: 9
toc: true
description: |
  The recommended way to deploy WordPress on Platform.sh is using Composer.  The most popular and supported way to do so is with the <a href="https://github.com/johnpbloch/wordpress">John Bloch</a> script.<br><br>

  Platform.sh strongly recommends starting new WordPress projects from our <a href="https://github.com/platformsh-templates/wordpress">WordPress Template</a>, which is built using Composer and includes the WP-CLI by default.  It also includes modifications to the configuration files necessary to connect to a database on Platform.sh automatically.
---

## Plugin compatibility

Platform.sh does not blacklist any WordPress plugins.  However, some plugins are known to require write access to their own file system as part of their setup process.  That is not possible on Platform.sh.  The file system where code lives is read-only for security reasons and cannot be written to from the application, only during the [build hook](/configuration/app/build.md).

In some cases that can be worked around by copying a file as part of the build hook process.  In other cases the plugin is simply incompatible with Platform.sh.  If you find a plugin that tries to write to its own directory we recommend filing an issue with that plugin, as such behavior should be viewed as a security bug.

## Additional information