module.exports = {

  /* Your site config here */

  siteMetadata: {
    title: `Peter Koenders - New Zealand`,
    description: `Peter Koenders - New Zealand`,
    author: "Peter Koenders",
    year: "2020",
  },
  plugins: [


    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      }
    },

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variable: true,
            weights: [`300..700`],
          },
          {
            family: `Roboto Slab`,
            variable: true,
            weights: [`300..700`],
          },
          {
            family: `Spectral`,
            variable: true,
            weights: [`300..700`],
          },

          {
            family: `Merriweather`,
            variable: true,
            weights: [`300..700`],
          },

          {
            family: `Vollkorn`,
            variable: true,
            weights: [`400..900`],
          },

        ],
      },
    },


    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-md`,
        path: `${__dirname}/src/content/projects-md/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/netlifycms/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1200,
            },
          },
        ],
      },
    },



    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pixl Studio - New Zealand`,
        short_name: `Pixl Studio - New Zealand`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/svg/logo-pixl-simple.inline.svg`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
