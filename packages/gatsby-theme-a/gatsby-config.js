const path = require("path");
module.exports = {
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "content")
      }
    }
  ]
};
