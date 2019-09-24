const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/page.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/home.js"))),
  "component---src-templates-contact-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/contact.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/blog.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/project.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/portfolio.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rob/work/stackbit/stackbit-themes/themes/exto/.cache/dev-404-page.js")))
}

