module.exports = {
  siteMetadata: {
    title: `Lake County Tech Meetup`,
    description: `A website for a local meetup in Lake County Illinois, all things
    technology, web, cloud, devOps, cybersecurity / infosec, blockchain, 
    @ThePracticalDev supporters ...etc.`,
    author: `@jacobMGEvans`
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/database/static`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lake County Tech Meetup`,
        short_name: `Lake Co. Tech`,
        start_url: `/`,
        background_color: `#003399`,
        theme_color: `#23b573`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-circle.svg`
      }
    },
    `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
