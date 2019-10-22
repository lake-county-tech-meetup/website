import React from 'react';
import { graphql } from 'gatsby';
import Link from 'components/Link';
import { DefaultLayout } from 'components/Layouts';
import SEO from 'components/SEO';

export default function Template({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data;
  return (
    <DefaultLayout headline="Events">
      <SEO title="Events" />
      {edges.map(({ node }) => {
        return (
          <Link key={node.id} to={node.fields.pagePath}>
            {node.frontmatter.title}
          </Link>
        );
      })}
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query BlogQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: {
        fields: { sourceInstance: { eq: "events" }, published: { eq: true } }
      }
      sort: { order: DESC, fields: [frontmatter___startDate] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
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
`;
