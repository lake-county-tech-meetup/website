/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';

import { DefaultLayout } from 'components/Layouts';
import SEO from 'components/SEO';
import { PaginationLink } from 'components/Pagination';

const EventTemplate = ({ data, pageContext }) => {
  const { event } = data;
  const { previous, next } = pageContext;

  return (
    <DefaultLayout headline={event.frontmatter.title}>
      <SEO title={event.frontmatter.title} />

      <div dangerouslySetInnerHTML={{ __html: event.html }} />

      <Link to="/events/">See More Events</Link>

      <div className="mt-2">
        {previous && (
          <PaginationLink to={previous.fields.pagePath}>
            {`< ${previous.frontmatter.title}`}
          </PaginationLink>
        )}
        {next && (
          <PaginationLink to={next.fields.pagePath}>
            {`${next.frontmatter.title} >`}
          </PaginationLink>
        )}
      </div>
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
