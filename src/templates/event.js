/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';

import { DefaultLayout } from 'components/Layouts';
import SEO from 'components/seo';

const EventTemplate = ({ data, pageContext: { next, previous } }) => {
  const { event } = data;
  return (
    <DefaultLayout headline={event.frontmatter.title}>
      <SEO title={event.frontmatter.title} />
      {(previous || next) && (
        <>
          {previous && (
            <Link to={previous.fields.pagePath}>
              <h4>&lt; Previous</h4>
              <span>{previous.frontmatter.title}</span>
            </Link>
          )}
          {next && (
            <Link to={next.fields.pagePath}>
              <h4>Next &gt;</h4>
              <span>{next.frontmatter.title}</span>
            </Link>
          )}
        </>
      )}
      <div dangerouslySetInnerHTML={{ __html: event.html }} />
    </DefaultLayout>
  );
};

export default EventTemplate;

export const pageQuery = graphql`
  query EventPageQuery($slug: String!) {
    event: markdownRemark(
      fields: { sourceInstance: { eq: "events" }, slug: { eq: $slug } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`;
