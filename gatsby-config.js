module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Tailwind',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: '6ha4ky27vyau',
      },
    },
  ],
};
