const Metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const discoverPartials = require('metalsmith-discover-partials');

Metalsmith(__dirname)
  .metadata({
    sitename: 'Teaching Notes for Engineering Design',
    siteurl: 'https://jamesgopsill.github.io/TeachingNotesForEngineeringDesign/',
    description: 'A GW4 collaboration creating a set of notes to support Engineering Design across Bath, Bristol, Cardiff, Exeter and UWE',
    generatorName: 'Metalsmith',
    generatorUrl: 'http://www.metalsmith.io'
  })
  .source('./src')
  .destination('./docs')
  .clean(true)
  .use(collections({
    posts: 'posts/*/*.md'
  }))
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(discoverPartials({
    directory: 'layouts/partials',
    pattern: /\.hbs$/
  }))
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err){
    if (err) throw err;
  });
