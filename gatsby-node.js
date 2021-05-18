const path = require("path")

//CREATE INDIVIDUAL WP PAGES
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    query PagesQuery {
      allWpPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //WP Pages
  pages.data.allWpPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/wp-page-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // //Product Pages
  // pages.data.allShopifyProduct.edges.forEach(edge => {
  //   createPage({
  //     path: `/product/${edge.node.handle}`,
  //     component: path.resolve("./src/templates/ProductPageTemplate.js"),
  //     context: {
  //       handle: edge.node.handle,
  //     },
  //   })
  // })
}
