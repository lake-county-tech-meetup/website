const path = require(`path`);
const config = require(`../../src/config/siteConfig`);

const createEventPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Only allow drafts (pages where published != true) when **NOT** in production
  const publishStatus =
    config.activeEnv === `production` ? [true] : [true, false];

  const CREATE_EVENT_PAGES_QUERY = `
    {
      allMarkdownRemark(
        filter: {
          fields: { sourceInstance: { eq: "events" } }
          frontmatter: { published: { in: [${publishStatus}] } }
        },
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
  `;

  const result = await graphql(CREATE_EVENT_PAGES_QUERY);
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
