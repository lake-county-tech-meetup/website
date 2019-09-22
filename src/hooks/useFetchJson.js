import { useStaticQuery, graphql } from "gatsby";

//! This can be made more generic/dynamic and agnostic for all JSON fetchs
export function useFetchJson(key) {
  const data = useStaticQuery(graphql`
    {
      allStaticJson {
        edges {
          node {
            headerHome
            summaryBlockHome
            quote
         }
        }
      }
    }
  `);
  return data.allStaticJson.edges[0].node[key];
}
