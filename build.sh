HUGOVERSION=0.68.3
SITEDIR=docs

# Move theme into the example site
mkdir $SITEDIR/themes
mkdir $SITEDIR/themes/avocadocs
mv archetypes $SITEDIR/themes/avocadocs/archetypes
mv data $SITEDIR/themes/avocadocs/data
mv layouts $SITEDIR/themes/avocadocs/layouts
mv static $SITEDIR/themes/avocadocs/static

# Download Hugo
cd $SITEDIR
wget https://github.com/gohugoio/hugo/releases/download/v$HUGOVERSION/hugo_${HUGOVERSION}_Linux-64bit.tar.gz
tar xvzf hugo_${HUGOVERSION}_Linux-64bit.tar.gz
rm hugo_${HUGOVERSION}_Linux-64bit.tar.gz

# For docs, prepare files - make sure to update web.locations
npm install
npm run fetch-files

# Build the site
./hugo

# minify assets
npm run assets-dist
