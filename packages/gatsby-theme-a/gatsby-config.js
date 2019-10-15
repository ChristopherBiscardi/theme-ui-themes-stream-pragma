const path = require("path");
module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "gatsby-theme-a-mdx",
        path: path.resolve(__dirname, "content")
      }
    }
  ]
};
