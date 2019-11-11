// This file is the most confusing! It is using the Gatsby Create Pages API to be able to register paths in order to post the to the site... Need to read more about this (and Gatsby, GraphQL, React). Should comment the rest of this project too, for when I revisit at a later date. Understand the concepts, but some syntax is challenging.

const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
       edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}