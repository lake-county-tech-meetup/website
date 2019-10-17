const onCreateNode = args => {
  const { node, getNode, actions } = args;
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let slug;
    const fileNode = getNode(node.parent);

    const { name, sourceInstanceName } = fileNode;

    slug = name;

    if (node.frontmatter && node.frontmatter.slug) {
      // Allow for frontmatter overriding
      // eslint-disable-next-line prefer-destructuring
      slug = node.frontmatter.slug;
    }

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
  // createEventSlug(args);
};

module.exports = onCreateNode;
