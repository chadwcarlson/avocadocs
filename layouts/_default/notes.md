# Differences

```
<!DOCTYPE html>
<html lang="en">
  {{ partial "head/head" . }}
  <body class="bg-white">
    
  </body>
</html>
```

## Base of

`baseof.html` for docs-2:

```
<!DOCTYPE html>
<html lang="en">
  {{ partial "head/head" . }}
  <body class="bg-white">
    {{ partial "header/header" . }}
    <div class="container-fluid">
      <div class="row">
        {{ partial "navigation/sidebar/sidebar" . }}
        {{- block "main" . }}{{- end }}
      </div>
    </div>
    {{ partial "navigation/gototopbutton" . }}
    {{ partial "scripts/scripts" . }}
  </body>
</html>
```

### head

* identical for doc-1

### body class="bg-white"

* identical for doc-1

### header

**`header.html` for DOC-2**

```
<!-- Header -->
<header class="duik-header">

  <!-- This template is set up for doc2 -->
  <nav class="navbar navbar-expand-md fixed-top bg-white border-bottom text-dark py-2">

    {{ partial "header/logo" . }}
    {{ partial "header/hamburger" . }}

    <div class="collapse navbar-collapse" id="navbarCollapse">

      {{ partial "header/links" . }}
      {{ partial "header/downloadbutton" . }}

    </div>

  </nav>

</header>
<!-- End Header -->
```

**DOC-1**

*** Identical ***

* `header class="duik-header"`

*** Different ***

* `nav class="navbar navbar-dark fixed-top bg-primary flex-nowrap p-0"`
* Logo:
  * class=`"navbar-brand bg-md-primary-darker col-md-3 col-xl-2 mr-0 py-3"`
  * img src=`"img/logo-light.png"`
* Header Search: not included in DOC-2 (search is only located in sidebar in DOC-2. For DOC-1 its in both places)

```
<!-- Header Search -->
<input class="js-search border-0 d-none d-md-block form-control form-control-sm w-100 ml-md-4" type="text" placeholder="Search..." aria-label="Search..." data-url="assets/include/json/autocomplete-data-for-documentation-search.json">
<!-- End Header Search -->
```

* MISSING: Header `hamburger` for mobile
* Header links `ul class`(DOC-2: `<ul class="navbar-nav align-items-md-center ml-md-auto">`)
  * `ul class="navbar-nav duik-header__nav small text-nowrap flex-row px-3 ml-0 ml-sm-3"`

```
<!-- Header Links -->
<ul class="navbar-nav duik-header__nav small text-nowrap flex-row px-3 ml-0 ml-sm-3">
  <li class="nav-item">
    <a class="nav-link" href="https://htmlstream.com/preview/docs-ui-kit/" target="_blank" title="Live Preview"><i class="fa fa-desktop mr-sm-1"></i> <span class="d-none d-lg-inline-block">Live Preview</span></a>
  </li>
  <li class="nav-item ml-4">
    <a class="nav-link" href="https://github.com/htmlstreamofficial/docs-ui-kit" title="Report an Issue" target="_blank"><i class="fas fa-bug mr-sm-1"></i> <span class="d-none d-lg-inline-block">Report an Issue</span></a>
  </li>
  <li class="nav-item ml-3 ml-sm-5">
    <a class="btn btn-sm btn-light text-primary" href="https://htmlstream.com/templates/docs-ui-kit" title="Download"><i class="fas fa-cloud-download-alt mr-sm-1"></i> Download</a>
  </li>
</ul>
<!-- End Header Links -->
```

### div class="container-fluid"

* identical for doc-1

### div class="row"

* identical for doc-1

### sidebar

**DOC-1**

*** Identical ***

*

*** Different ***

* nav class: `<nav class="col-md-3 col-xl-2 bg-light duik-sidebar navbar-expand-md">`
* div class: `  <div class="d-flex d-md-none justify-content-between mb-5">`
  * Sidebar search:

    ```
    <!-- Sidebar Search -->
    <form class="col form-inline input-group-sm">
      <input class="js-search form-control form-control-sm w-100" type="text" placeholder="Search..." data-url="include/json/autocomplete-data-for-documentation-search.json">
    </form>
    <!-- End Sidebar Search -->
    ```

  * Responsive toggle button:
    ```
    <!-- Responsive Toggle Button -->
    <button class="btn btn-link pl-0" type="button" data-toggle="collapse" data-target="#sidebar-nav" aria-controls="sidebar-nav" aria-expanded="false" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 30 30" width="30" height="30" focusable="false">
        <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/>
      </svg>
    </button>
    <!-- End Responsive Toggle Button -->
    ```
* div Sidebar nav:

  ```
  <!-- Sidebar Nav -->
  <div class="collapse navbar-collapse" id="sidebar-nav">
    <div class="js-scrollbar duik-sidebar-sticky">
      <h5 class="duik-sidebar__heading">Introduction</h5>
      <ul class="duik-sidebar__nav">
        <li class="duik-sidebar__item"><a class="duik-sidebar__link active" href="#">About</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">What’s Included</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Getting Started</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Starter Template</a></li>
      </ul>

      <h5 class="duik-sidebar__heading">Base UI</h5>
      <ul class="duik-sidebar__nav">
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Typography</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Alerts</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Avatars</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Badge</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Breadcrumb</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Buttons</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Cards</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Collapse</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Dividers</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Forms</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Label</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">List group</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Navs</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Progress</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Sticky footer</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Tables</a></li>
      </ul>

      <h5 class="duik-sidebar__heading">Others</h5>
      <ul class="duik-sidebar__nav">
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Changelog</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">Credits</a></li>
        <li class="duik-sidebar__item"><a class="duik-sidebar__link" href="#">License</a></li>
      </ul>
    </div>
  </div>
  <!-- End Sidebar Nav -->
  ```

### main

**DOC-1**

```
<main class="ml-md-auto col-md-9 col-xl-10 px-4 pt-0 pt-md-11">
  <div class="row pt-3">
```

#### Content Nav

This section displays a content navigation TOC in the top right hand corner of the page.

**DOC-1**

```
<!-- Content Nav -->
<div class="col-xl-2 order-xl-2 d-none d-xl-inline-block">
  <ul class="js-scroll-nav duik-content-nav">
    <li class="duik-content-nav__item"><a href="#doc-about">About</a></li>
    <li class="duik-content-nav__item"><a href="#doc-whats-included">What’s Included</a></li>
    <li class="duik-content-nav__item"><a href="#doc-getting-started">Getting Started</a></li>
    <li class="duik-content-nav__item"><a href="#doc-starter-template">Starter Template</a></li>
    <li class="duik-content-nav__item">
      <a href="#important-globals">Important globals</a>
      <ul>
        <li class="duik-content-nav__item"><a href="#html5-doctype">HTML5 doctype</a></li>
        <li class="duik-content-nav__item"><a href="#responsive-meta-tag">Responsive tag</a></li>
      </ul>
    </li>
  </ul>
</div>
<!-- End Content Nav -->
```

#### Footer - Identical

```
<!-- Footer -->
<footer class="small py-4">
  <div class="row">
    {{ partial "footer/copyright" . }}
    {{ partial "footer/social" . }}
  </div>
</footer>
<!-- End Footer -->
```

**DOC-1**

Identical

*** Identical ***

* `<footer class="small py-4">`
* `  <div class="row">`
* Copyright
* Social: div class
* Social: ul class
* Social: li class
* Social: a class

### gototopbutton

**DOC-1**

Identical

### scripts

**DOC-1**

Identical
