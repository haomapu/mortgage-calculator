/**
 * 
 * @type {import('gatsby').GatsbyConfig
 *     
 * }
 */
require("dotenv").config({
  path: `./.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
  ],
};
