// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-home-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/home.js" /* webpackChunkName: "component---src-templates-home-js" */),
  "component---src-templates-contact-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/contact.js" /* webpackChunkName: "component---src-templates-contact-js" */),
  "component---src-templates-blog-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-project-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---src-templates-portfolio-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/portfolio.js" /* webpackChunkName: "component---src-templates-portfolio-js" */),
  "component---src-templates-post-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/rob/work/stackbit/stackbit-themes/themes/exto/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rob/work/stackbit/stackbit-themes/themes/exto/.cache/data.json")

