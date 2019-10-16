/** @jsx jsx */
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { jsx, mdx } from "../context";

export default ({ data }) => (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer scope={{ mdx }}>{data.mdx.body}</MDXRenderer>
    </div>
  );

export const query = graphql`
  query ThemeAQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`;
