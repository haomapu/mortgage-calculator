/**
 * 
 * @type {import('gatsby').GatsbyConfig
 *     
 * }
 */
require("dotenv").config()

module.exports = {
  flags: {
    DEV_SSR: true
  },
  plugins: [
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        // as your choice
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
  ],
};

