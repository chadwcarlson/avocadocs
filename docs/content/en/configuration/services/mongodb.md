---
title: "MongoDB (Database service)"
weight: 6
description: "MongoDB is a cross-platform, document-oriented database.<br><br>For more information on using MongoDB, see <a href=\"https://docs.mongodb.com/manual/\">MongoDB's own documentation</a>."
toc: true
sidebarTitle: "MongoDB"
---

## Supported versions

{{< image-versions image="mongodb" status="supported" >}}

> **note**
>
> Downgrades of MongoDB are not supported. MongoDB will update its own datafiles to a new version automatically but cannot downgrade them. If you want to experiment with a later version without committing to it use a non-master environment.

## Relationship

The format exposed in the ``$PLATFORM_RELATIONSHIPS`` [environment variable](/development/variables.md#platformsh-provided-variables):

{{< highlight json >}}
{{< remote url="https://examples.docs.platform.sh/relationships/mongodb" >}}
{{< /highlight >}}

## Usage example

In your `.platform/services.yaml`:

{{< highlight yaml >}}
{{< readFile file="content/en/registry/images/examples/full/mongodb.services.yaml" >}}
{{< /highlight >}}

The minimum disk size for MongoDB is `512` (MB).

{{< highlight yaml >}}
{{< readFile file="content/en/registry/images/examples/full/mongodb.app.yaml" >}}
{{< /highlight >}}

For PHP, in your `.platform.app.yaml` add:

```yaml
runtime:
    extensions:
        - mongodb
```

(Before PHP 7, use `mongo` instead.)

You can then use the service in a configuration file of your application with something like:

{{< tabs "Go" "Java" "Nodejs" "PHP" "Python" >}}

{{< tab id="Go" active="true" >}}
{{< highlight go >}}
{{< readFile file="static/files/fetch/examples/golang/mongodb" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="Java" >}}
{{< highlight java >}}
{{< readFile file="static/files/fetch/examples/java/mongodb" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="Nodejs" >}}
{{< highlight js >}}
{{< readFile file="static/files/fetch/examples/nodejs/mongodb" >}}
{{< /highlight >}}
{{< /tab >}}

{{< tab id="PHP">}}
{{< highlight php >}}
{{< readFile file="static/files/fetch/examples/php/mongodb" >}}{{< /highlight >}}
{{< /tab >}}

{{< tab id="Python" >}}
{{< highlight python >}}
{{< readFile file="static/files/fetch/examples/python/mongodb" >}}
{{< /highlight >}}
{{< /tab >}}

{{< /tabs >}}

## Exporting data

The most straightforward way to export data from a MongoDB database is to open an SSH tunnel to it and simply export the data directly using MongoDB's tools.  

First, open an SSH tunnel with the Platform.sh CLI:

```bash
platform tunnel:open
```

That will open an SSH tunnel to all services on your current environment, and produce output something like the following:

```bash
SSH tunnel opened on port 30000 to relationship: database
SSH tunnel opened on port 30001 to relationship: redis
```

The port may vary in your case.  You will also need to obtain the user, password, and database name from the relationships array, as above.

Then, simply connect to that port locally using `mongodump` (or your favorite MongoDB tools) to export all data in that server:

```bash
mongodump --port 30000 -u main -p main --authenticationDatabase main --db main
```

(If necessary, vary the `-u`, `-p`, `--authenticationDatabase` and `--db` flags.)

As with any other shell command it can be piped to another command to compress the output or redirect it to a specific file.

For further references please see the [official mongodump documentation](https://docs.mongodb.com/manual/reference/program/mongodump/#bin.mongodump).

## Upgrading

To upgrade to 3.6 from a version earlier than 3.4, you must successively upgrade major releases until you have upgraded to 3.4. For example, if you are running a 3.0 image, you must upgrade first to 3.2 and then upgrade to 3.4 before you can upgrade to 3.6.

For more details on upgrading and how to handle potential application backward compatibility issues, please see [Release Notes for MongoDB](https://docs.mongodb.com/manual/release-notes).