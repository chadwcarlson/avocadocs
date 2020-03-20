HUGOVERSION=0.66.0

wget https://github.com/gohugoio/hugo/releases/download/v$HUGOVERSION/hugo_${HUGOVERSION}_Linux-64bit.tar.gz
tar xvzf hugo_${HUGOVERSION}_Linux-64bit.tar.gz

rm hugo_${HUGOVERSION}_Linux-64bit.tar.gz

# npm run prod

# ./hugo
# pwd
# HUGO_THEME=avocadocs ./hugo --themesDir ../../
./hugo -s exampleSite --themesDir ../../ --theme avocadocs --debug
