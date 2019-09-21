module.exports = {
  siteMetadata: {
    title: `Lakewood Tech Meetup`,
    description: `A website for a local meetup in Lakewood County Illinois, all things
    technology, web, cloud, devOps, cybersecurity / infosec, blockchain, 
    @ThePracticalDev supporters ...etc.`,
    author: `@jacobMGEvans`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lakewood-tech-meetup`,
        short_name: `lakewood-tech`,
        start_url: `/`,
        background_color: `#249`,
        theme_color: `#249`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, //! Place Holder
        // TODO: UPDATE IMAGE AND COLORS SCHEMA
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
