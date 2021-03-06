const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const themeTemplate = require.resolve(`./src/templates/mdx-template.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery {
        allFile(
          filter: {
            sourceInstanceName: { eq: "gatsby-theme-b-mdx" }
            ext: { eq: ".mdx" }
          }
        ) {
          nodes {
            id
            childMdx {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allFile.nodes.forEach(({ childMdx }) => {
      createPage({
        // Path for this page — required
        path: `${childMdx.frontmatter.slug}`,
        component: themeTemplate,
        context: {
          id: childMdx.id
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        }
      });
    });
  });
};
