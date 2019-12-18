import React from 'react';
import { graphql } from 'gatsby';
import { DefaultLayout } from 'components/Layouts';
import SEO from 'components/SEO';
import EventCard from 'components/EventCard';
import { PaginationLink } from 'components/Pagination';

const EventsTemplate = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <DefaultLayout headline="Events">
      <SEO title="Events" />
      {!edges.length && <>No Events :(</>}
      {edges &&
        edges.map(({ node }) => (
          <EventCard
            key={node.id}
            pagePath={node.fields.pagePath}
            title={node.frontmatter.title}
            startDate={node.frontmatter.startDate}
            venue={node.frontmatter.venue}
            description={node.frontmatter.description || node.excerpt}
          />
        ))}

      <div>
        {/* previousPageLink and nextPageLink were added by the plugin */}
        {previousPagePath && (
          <PaginationLink to={previousPagePath}>Previous</PaginationLink>
        )}
        {nextPagePath && (
          <PaginationLink to={nextPagePath}>Next</PaginationLink>
        )}
      </div>
    </DefaultLayout>
  );
};

export default EventsTemplate;

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
          excerpt
          fields {
            slug
            pagePath
          }
          frontmatter {
            title
            description
            startDate(formatString: "ddd, MMM Do - h:mm A")
            venue {
              name
              address
            }
          }
        }
      }
    }
  }
`;
