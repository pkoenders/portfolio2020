module.exports = {

  /* Your site config here */

  siteMetadata: {
    title: `Peter Koenders`,
    description: `Portfolio | Peter Koenders`,
    siteUrl: "https://pkoenders.netlify.app", // No trailing slash allowed!
    // defaultImage: "/images/svg/logo-pixl.inline.svg", // Path to your image you placed in the 'static' folder
    defaultImage: "/images/pkoenders.png", // Path to your image you placed in the 'static' folder

    author: "Peter Koenders",
    year: "2021",
  },
  plugins: [

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#99dfbe`,
        // Disable the loading spinner.
        showSpinner: false,
        //parent: '.headerNavWrapper',
      },
    },


    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-7623107-7",
      },
    },


    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Material+Icons+Round`,
              // fontDisplay: 'swap',
              text: "download call clear send arrow_forward arrow_back arrow_upward chevron_left chevron_right launch follow_the_signs design_services accessibility_new favorite_border article",
              strategy: 'base64', // 'base64' || 'cdn'
            },

            {
              family: "Roboto",
              variants: ["400", "500", "600"],
              // fontDisplay: 'swap',
              strategy: 'base64', // 'base64' || 'cdn'
            },

            {
              family: "Crimson+Pro",
              variants: ["900", "700"],
              // fontDisplay: 'swap',
              strategy: 'base64',
            },


            {
              family: "Bodoni+Moda",
              variants: ["800"],
              // fontDisplay: 'swap',
              text: "“ ”",
              strategy: 'base64',
            },
          ],
        },
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        // formats: ['woff2', 'woff'],
        useMinify: true,
        //sePreload: true,
        // usePreconnect: false,
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
        name: `blog-md`,
        path: `${__dirname}/src/content/blog-md/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1440,
              quality: 100,
              withWebp: true,
              loading: `lazy`,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              background: `#ffffff`,
              zIndex: 100000,
              //container: '.zoom-container',
              // template: {
              //   border: `1px solid #ffffff`,
              // },
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio | Peter Koenders`,
        short_name: `Peter Koenders`,
        start_url: `/`,
        background_color: `#253240`,
        theme_color: `#253240`,
        lang: `en`,
        display: `standalone`,
        icon: `static/brand-manifest.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
