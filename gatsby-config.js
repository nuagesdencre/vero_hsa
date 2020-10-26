module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
