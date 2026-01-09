module.exports = {
  siteMetadata: {
    title: `adenyrr - Portfolio`,
    description: `Administrateur système passionné par l'infrastructure, cloud et open-source.`,
    siteUrl: `https://adenyrr.me`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adenyrr - Portfolio`,
        short_name: `adenyrr`,
        start_url: `/`,
        background_color: `#0d1117`,
        theme_color: `#3b82f6`,
        display: `standalone`,
        icon: `static/favicon.jpg`,
      },
    },
  ]
};