module.exports = {
  pathPrefix: "/studious-bassoon",
  siteMetadata: {
    title: "My Test Site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-eslint",
  ],
};
