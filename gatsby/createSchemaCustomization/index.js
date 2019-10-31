const createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type MarkdownRemark implements Node { fields: Fields, frontmatter: Frontmatter }`,
    schema.buildObjectType({
      name: `Fields`,
      fields: {
        sourceInstance: `String`,
        slug: `String`,
        pagePath: `String`,
        published: `Boolean`,
      },
      interfaces: [`Node`],
    }),
    `type Frontmatter implements Node {
      title: String
      description: String
      startDate: Date @dateformat
      endDate: Date @dateformat
      venue: Venue
    }`,
    `type Venue implements Node {
      name: String
      address: String
    }`,
  ];
  createTypes(typeDefs);
};

module.exports = createSchemaCustomization;
