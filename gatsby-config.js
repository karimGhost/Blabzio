/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `blabzio`,
    siteUrl: `https://blabzio.web.app/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },

    
  ],
  flags: {
    DEV_SSR: true,
      FAST_DEV: true,
   PRESERVE_FILE_DOWNLOAD_CACHE: true,
   PRESERVE_WEBPACK_CACHE: true,
   PARALLEL_SOURCING: true,
    //ECT_NODE_MUTATIONS: true,
   //PARTIAL_HYDRATION: true,
   //DETECT_NODE_MUTATIONS: true
  },
};
