const path = require(`path`);
const { paginate } = require(`gatsby-awesome-pagination`);
const config = require(`../../src/config/siteConfig`);

const paginateEvents = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
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
              startDate
            }
          }
        }
      }
    }
  `);
  const eventsTemplate = path.resolve(`./src/templates/events.js`);
  paginate({
    createPage, // The Gatsby `createPage` function
    items: results.data.allMarkdownRemark.edges, // An array of objects
    itemsPerPage: config.events.itemsPerPage,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/events/` : `/events`),
    component: eventsTemplate,
  });
};

module.exports = paginateEvents;
