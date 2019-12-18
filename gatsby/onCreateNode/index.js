const config = require(`../../src/config/siteConfig`);

const onCreateNode = args => {
  const { node, getNode, actions } = args;
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let slug;
    let published;

    const fileNode = getNode(node.parent);

    const { name, sourceInstanceName } = fileNode;

    slug = name;
    // Default to false for safety
    published = false;

    if (node.frontmatter && node.frontmatter.slug) {
      // Allow for frontmatter overriding
      // eslint-disable-next-line prefer-destructuring
      slug = node.frontmatter.slug;
    }

    // If showDraft is true, just publish everything
    // Allow for the publish override too.
    // Thought: if `published: false` should it NEVER be shown?
    if (config.showDraft || node.frontmatter.published === true) {
      published = true;
    }

    createNodeField({
      node,
      name: `published`,
      value: published,
    });

    // Create the slug for each page.
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    // Helpful for filtering via graphql
    createNodeField({
      node,
      name: `sourceInstance`,
      value: sourceInstanceName,
    });

    // Create the page path for the events
    createNodeField({
      node,
      name: `pagePath`,
      value: `/${sourceInstanceName}/${slug}/`,
    });
  }
};

module.exports = onCreateNode;
