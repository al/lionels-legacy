const { createSitemap } = require('vue-router-sitemap')
const { routes } = require('./dist/server/routes')

const sitemap = createSitemap({
  hostname: 'https://www.example.com',
  routes: routes,
})

const xml = sitemap.toString()
console.log(xml)
