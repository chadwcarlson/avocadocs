---
title: "Syntax highlighting"
description: |
  You control your application and the way it will be built and deployed on Platform.sh via a single configuration file, `.platform.app.yaml`, located at the root of your application folder inside your Git repository.
sidebarTitle: "Apps (.platform.app.yaml)"
---

Mauris sodales ante enim, vitae tristique nisl elementum a. Nunc a orci consequat, volutpat ligula et, semper neque. Phasellus at accumsan est. Praesent molestie commodo leo in dignissim. Nulla nec nibh eget sapien iaculis bibendum.

### Inline code

Maecenas `volutpat tincidunt lectus vitae` venenatis. Nulla nec nibh eget sapien iaculis bibendum. Maecenas `volutpat tincidunt lectus vitae` venenatis. Nulla nec nibh eget sapien iaculis bibendum. Maecenas `volutpat tincidunt lectus vitae` venenatis. Nulla nec nibh eget sapien iaculis bibendum.

* `volutpat tincidunt lectus vitae`
* `volutpat tincidunt lectus vitae`
    * `volutpat tincidunt lectus vitae`
    * `volutpat tincidunt lectus vitae`
* `volutpat tincidunt lectus vitae`
* `volutpat tincidunt lectus vitae`

### Full highlighting (with Copy button and line numbers)

Praesent eu dictum magna. Vestibulum diam arcu, condimentum ac turpis vitae, dignissim volutpat lorem. Quisque eu ipsum libero. Aliquam porttitor tellus nunc. Aenean lacinia augue ac massa imperdiet, ut maximus urna elementum.

```python
# main.py

import platformshconfig
```

Praesent eu dictum magna. Vestibulum diam arcu, condimentum ac turpis vitae, dignissim volutpat lorem. Quisque eu ipsum libero. Aliquam porttitor tellus nunc. Aenean lacinia augue ac massa imperdiet, ut maximus urna elementum.

```yaml
# .platform/routes.yaml

"https://{default}/":
    type: upstream
    upstream: "app:http"

"https://www.{default}/":
    type: upstream
    upstream: "app:http"
```

Praesent efficitur, nibh quis tempus lobortis, metus sem consectetur odio, sit amet dictum risus magna vitae erat. Proin vitae ornare justo. Maecenas scelerisque, lacus et vulputate aliquet, elit nisi blandit arcu, eu gravida tellus tortor nec diam. Aliquam eget odio nisi. Suspendisse nulla sapien, posuere et nisl fringilla, rhoncus bibendum lorem. Donec sed facilisis orci.

```bash
platform integration:add --type=github --project=PLATFORMSH_PROJECT_ID --token=GITHUB-USER-TOKEN --repository=USER/REPOSITORY
```

Praesent efficitur, nibh quis tempus lobortis, metus sem consectetur odio, sit amet dictum risus magna vitae erat. Proin vitae ornare justo. Maecenas scelerisque, lacus et vulputate aliquet, elit nisi blandit arcu, eu gravida tellus tortor nec diam. Aliquam eget odio nisi. Suspendisse nulla sapien, posuere et nisl fringilla, rhoncus bibendum lorem. Donec sed facilisis orci.

```yaml
# .platform.app.yaml

name: 'app'

type: 'php:7.4'

relationships:
    database: 'db:mysql'
    redis: 'cache:redis'

disk: 2048

mounts:
    '/web/sites/default/files':
        source: local
        source_path: 'files'
    '/tmp':
        source: local
        source_path: 'tmp'
    '/private':
        source: local
        source_path: 'private'
    '/.drush':
        source: local
        source_path: 'drush'
    '/drush-backups':
        source: local
        source_path: 'drush-backups'
    '/.console':
        source: local
        source_path: 'console'

build:
    flavor: composer

hooks:
    build: |
        set -e
        bash install-redis.sh 4.3.0
    deploy: |
        set -e
        php ./drush/platformsh_generate_drush_yml.php
        cd web
        drush -y cache-rebuild
        drush -y updatedb
        drush -y config-import

web:
    locations:
        '/':
            root: 'web'
            expires: 5m
            passthru: '/index.php'
            allow: false
            rules:
                '\.(jpe?g|png|gif|svgz?|css|js|map|ico|bmp|eot|woff2?|otf|ttf)$':
                    allow: true
                '^/robots\.txt$':
                    allow: true
                '^/sitemap\.xml$':
                    allow: true
                '^/sites/sites\.php$':
                    scripts: false
                '^/sites/[^/]+/settings.*?\.php$':
                    scripts: false
        '/sites/default/files':
            allow: true
            expires: 5m
            passthru: '/index.php'
            root: 'web/sites/default/files'
            scripts: false
            rules:
                '^/sites/default/files/(css|js)':
                    expires: 2w
crons:
    drupal:
        spec: '*/20 * * * *'
        cmd: 'cd web ; drush core-cron'
```

Praesent eu dictum magna. Vestibulum diam arcu, condimentum ac turpis vitae, dignissim volutpat lorem. Quisque eu ipsum libero. Aliquam porttitor tellus nunc. Aenean lacinia augue ac massa imperdiet, ut maximus urna elementum.

Praesent efficitur, nibh quis tempus lobortis, metus sem consectetur odio, sit amet dictum risus magna vitae erat. Proin vitae ornare justo. Maecenas scelerisque, lacus et vulputate aliquet, elit nisi blandit arcu, eu gravida tellus tortor nec diam. Aliquam eget odio nisi. Suspendisse nulla sapien, posuere et nisl fringilla, rhoncus bibendum lorem. Donec sed facilisis orci.

```go
// server.go

package main

import "fmt"

func main() {

    if 7%2 == 0 {
        fmt.Println("7 is even")
    } else {
        fmt.Println("7 is odd")
    }

    if 8%4 == 0 {
        fmt.Println("8 is divisible by 4")
    }

    if num := 9; num < 0 {
        fmt.Println(num, "is negative")
    } else if num < 10 {
        fmt.Println(num, "has 1 digit")
    } else {
        fmt.Println(num, "has multiple digits")
    }
}
```
