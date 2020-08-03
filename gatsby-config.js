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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .33, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },

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
              maxWidth: 768,
            },
          },
        ],
      },
    },



    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Koenders - New Zealand`,
        short_name: `Peter Koenders - New Zealand`,
        start_url: `/`,
        background_color: `#253240`,
        theme_color: `#253240`,
        display: `minimal-ui`,
        icon: `src/images/svg/logo-pixl.inline.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },

    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
