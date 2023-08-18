const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  queryResults.data.allContentfulBlogPost?.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        id: node.id,
      },
    })
  })
}
