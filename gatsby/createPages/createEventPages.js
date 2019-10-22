const path = require(`path`);

const createEventPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fields: { sourceInstance: { eq: "events" }, published: { eq: true } }
        }
        sort: { order: DESC, fields: [frontmatter___startDate] }
      ) {
        edges {
          node {
            fields {
              slug
              pagePath
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic(result.errors);
  }

  const eventTemplate = path.resolve(`./src/templates/event.js`);
  const edges = [...result.data.allMarkdownRemark.edges];

  edges.forEach(({ node }, index) => {
    const next = index === 0 ? undefined : edges[index - 1].node;
    const previous =
      index === edges.length - 1 ? undefined : edges[index + 1].node;
    const {
      fields: { slug, pagePath },
    } = node;
    createPage({
      path: pagePath,
      component: eventTemplate,
      context: {
        slug,
        pagePath,
        previous,
        next,
      },
    });
  });
};

module.exports = createEventPages;
