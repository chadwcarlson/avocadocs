# General

## General

- [ ] Pages load slow locally
- [ ] mobile styling
- [ ] remove P.sh stuff to docs
- [ ] User overrides
- [ ] ensure `exampleSite` doesn't break
- [ ] `src` -> `content` directory (maybe a follow-up PR)
- [ ] THE THEME SHOULDN'T BE COMMITTED AT ALL! (Module? tagged repo cloned at build? submodule? How will this affect local?)
- [ ] there's some kind of "refresh to the top of the page going on"
- [ ] Clean up comments
- [ ] Useful comments
- [ ] Clean out unused

## Content layout

- [x] content margin too small?
- [x] link color should be `--psh-blue`
- [x] visited links take on purple color. change to normal color?
- [x] heading sizes in general are a little too large
- [x] heading margins next to content blocks too small
- [x] anchors (`partials/headline-hash.html`)
- [x] list pages do not have templates set up (or use desc buttons for them)

- [ ] Remove {{< description >}} shortcode in favor of templates
- [ ] No table styling (http://localhost:1313/configuration/routes/cache.html#header-behaviors)
- [ ] EDIT PAGE BUTTON needs to be migrated over (which I think I used a whole other grid area for that before, so should be iteresting)

- [ ] dynamic font size as screen size grows/shrinks
- [ ] Description styling?
- [ ] bullet/li product styling?

### Book links 

- [ ] home book link goes to section, rather than "/"

### Table of contents

- [ ] Table of Contents styling
- [ ] Table of Contents `:hover`
- [ ] Table of Contents syntax highlighting (maybe this actually shoudn't be highlighted, only in headeer? Might look a little cleaner that way.)

### Syntax highlighting

- [ ] Copy code button is in the wrong place, scrolling with the rest  of the text. It either  needs to be fixed, or popping out of the div.
- [ ] Heading syntax highlighting
- [ ] copy code background color overriding new format
- [ ] Code blocks require additional params for linenumbers
- [ ] code highlight is disabled when it's a link (http://localhost:1313/configuration/routes/redirects.html#partial-redirects)
- [x] should code blocks have a `max_height`, with scrollable-y?
- [ ] Overpass mono doesn't look like it's actually being applied to syntax highlighted sections

### Links & buttons

- [ ] relrefs in description don't render, should be replaced by a link override template, since I can do relref there. http://localhost:1313/security/backups.html
- [ ] description button style isn't pulled, looks shitty anyway
- [ ] "getting started" arrow style buttons aren't being used.

### Shortcode: mathjax

- [ ] mathjax should be loaded with shortcode, otherwise `$...$` is rendered.
    - [ ] not so sure about this. this can be useful in other places
- [ ] (http://localhost:1313/languages/php/fpm.html) including mathjax does not render correctly

### Images

- [ ] centering image (`_default/_markup/render_image.html`)
- [ ] inline image icons are raised above the line (http://localhost:1313/languages/php/xdebug.html#5-start-debugging)
- [ ] (http://localhost:1313/integrations/overview.html) this picture is bad, replace with a snippet
- [ ] (http://localhost:1313/administration/web/environments.html) these workflow figures look bad, and aren't on brand. (Marketing request)

### Drift/GTM

- [ ] DevRel drift shortcode (http://localhost:1313/overview/pricing/sponsored.html)
- [ ] GTM is completely excluded at this point

### Notes

- [ ] Notes don't apply a default theme, so they just show up as white (http://localhost:1313/configuration/routes/cache.html)
- [ ] copy code blocks look weird when within notes (http://localhost:1313/configuration/routes/https.html#lets-encrypt)
- [ ] Upper paddding on notes looks a little too big (http://localhost:1313/configuration/routes/https.html#automated-ssl-certificate-renewal-using-cron) (didn't update  on info theme? http://localhost:1313/overview/pricing.html)
- [ ] the service type note does not contain its styling (http://localhost:1313/configuration/services/kafka.html#usage-example)
- [x] Notes probably need a little more space around them, especially if we're going to keep the shadow (http://localhost:1313/configuration/app/source-operations.html)

### Code tabs

- [ ] code tabs is breaking (http://localhost:1313/configuration/services/elasticsearch.html#usage-example)
- [ ] (http://localhost:1313/development/local/tethered.html#local-environment-variables) codetabs incorrectly shown
- [ ] (http://localhost:1313/integrations/overview.html) this picture is bad, replace with a snippet

### Localcode/readFile

- [ ] readFile and localCode should be made into one shortcode called readFile

### Tiers

- [ ] Tier flag over tier-gated page
- [ ] change name of "tier" theme for notes to "special"

### Template accordians

- [ ] Template accordians need the updated styling from `accordian.html in avocadocsnew`

### Videos

- [ ] videos are a little too large. need a default and a max-width
- [ ] asciinema border box just looks bizarre.

# Header

- [ ] Replace widget with user-widget
- [x] Book links styles do not match current
- [x] logo is not a link

## Sidebar

### Sidebar

- [ ] Is there a way to snap the sidebar to the current level easily? Right now being on "Languages/Lisp" I still have to scroll down to find where I am

- [x] the first use of the `<hr>` looks thicker than the rest
- [x] margin/padding-bottom to give some cushion
- [x] `sidebarTitle` not used on sidebar
- [x] present on section index doesn't work on `overview`. `homebook`?
    - [x] Index page is incorrect
    - [x] it is present on the non-existant content page (`overview/_index.md` - http://localhost:1313/overview.html)
- [x] Sidebar: second level items do not display
- [x] margin-bottom after sidebar-group needs to be a little larger (before hr)
- [x] Active page font color should be blue, not black
- [x] Book2:
  - [x] every section is highlighted as active.
  - [x] sidebar does not stay static

### Search

- [ ] search/dropddown styling
- [ ] self-indexing partials/shortcodes not included
