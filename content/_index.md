
# H1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate ipsum vitae condimentum lacinia. Integer pretium tellus nec tincidunt posuere. Nullam consectetur, neque et gravida dignissim, massa ligula convallis dolor, eu malesuada diam ligula sed sem. Praesent non egestas mi. Maecenas `volutpat tincidunt lectus vitae` venenatis. Aenean porttitor lorem in vehicula venenatis. Vivamus sed hendrerit neque. Nulla imperdiet dapibus arcu eget luctus. Praesent porttitor rhoncus rhoncus.

## H2

Praesent eu dictum magna. Vestibulum diam arcu, condimentum ac turpis vitae, dignissim volutpat lorem. Quisque eu ipsum libero. Aliquam porttitor tellus nunc. Aenean lacinia augue ac massa imperdiet, ut maximus urna elementum. Praesent efficitur, nibh quis tempus lobortis, metus sem consectetur odio, sit amet dictum risus magna vitae erat. Proin vitae ornare justo. Maecenas scelerisque, lacus et vulputate aliquet, elit nisi blandit arcu, eu gravida tellus tortor nec diam. Aliquam eget odio nisi. Suspendisse nulla sapien, posuere et nisl fringilla, rhoncus bibendum lorem. Donec sed facilisis orci.

```python
# main.py

import platformshconfig
```

### H3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis dignissim bibendum. In iaculis, ex non sagittis consectetur, velit felis porta mauris, sed dictum erat purus nec enim. Praesent aliquam diam mi, ut ultrices nulla gravida at. Sed mattis velit id libero iaculis, mollis congue tellus imperdiet.


```yaml
# .platform/routes.yaml

"https://{default}/":
    type: upstream
    upstream: "app:http"

"https://www.{default}/":
    type: upstream
    upstream: "app:http"
```

Sed aliquam est vitae imperdiet luctus. Quisque suscipit pharetra ipsum vitae laoreet. Quisque ultrices est eu enim efficitur, quis pretium nibh porta. Ut id ultricies arcu, nec luctus nisl.

#### H4

Integer nec ultricies arcu, eget semper lorem. Nam consequat eu leo vitae interdum. Etiam aliquam, metus sit amet fermentum pulvinar, quam ante varius turpis, vitae euismod ante nisi at dolor. Vestibulum mattis ornare metus, at tempus enim condimentum ac. Nulla at augue lectus. Nam pulvinar metus et elit volutpat, volutpat cursus ipsum sollicitudin. Donec eu lorem eget erat laoreet viverra.

```bash
platform integration:add --type=github --project=PLATFORMSH_PROJECT_ID --token=GITHUB-USER-TOKEN --repository=USER/REPOSITORY
```

Nunc volutpat consectetur ligula, id commodo nibh auctor quis. Donec nec ligula sed nulla finibus porta a id mauris. Aliquam a varius magna, tincidunt faucibus eros. Duis nulla dui, consequat eu dolor id, mollis pharetra ex. Nam fermentum massa in diam congue, in posuere magna cursus. Integer condimentum dictum velit eu consequat. Praesent bibendum auctor enim, vel convallis ex ornare sit amet. Quisque eu tellus id sem pretium venenatis. Mauris ante enim, mollis vel tellus a, commodo porttitor turpis.

##### H5

Quisque commodo ultricies nibh, ut suscipit arcu lobortis vel. Pellentesque dapibus malesuada diam, nec facilisis urna laoreet ac. Mauris sodales ante enim, vitae tristique nisl elementum a. Nunc a orci consequat, volutpat ligula et, semper neque. Phasellus at accumsan est. Praesent molestie commodo leo in dignissim. Nulla nec nibh eget sapien iaculis bibendum. Phasellus porttitor lacinia eros non vestibulum. Proin ullamcorper pulvinar diam, at commodo mi luctus viverra. Cras erat elit, lacinia eget velit nec, sollicitudin hendrerit tellus. Nunc efficitur ornare convallis. Etiam purus odio, fermentum non sodales imperdiet, tempus a lorem. Nunc nec mauris non dolor auctor tincidunt. Proin ut ligula semper, rutrum ligula quis, mollis ipsum. Phasellus at porta urna.

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

##### H6

Quisque commodo ultricies nibh, ut suscipit arcu lobortis vel. Pellentesque dapibus malesuada diam, nec facilisis urna laoreet ac. Mauris sodales ante enim, vitae tristique nisl elementum a. Nunc a orci consequat, volutpat ligula et, semper neque. Phasellus at accumsan est. Praesent molestie commodo leo in dignissim. Nulla nec nibh eget sapien iaculis bibendum. Phasellus porttitor lacinia eros non vestibulum. Proin ullamcorper pulvinar diam, at commodo mi luctus viverra. Cras erat elit, lacinia eget velit nec, sollicitudin hendrerit tellus. Nunc efficitur ornare convallis. Etiam purus odio, fermentum non sodales imperdiet, tempus a lorem. Nunc nec mauris non dolor auctor tincidunt. Proin ut ligula semper, rutrum ligula quis, mollis ipsum. Phasellus at porta urna.

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
