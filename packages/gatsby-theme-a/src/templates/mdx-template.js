/** @jsx jsx */
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { mdx as mdxReactPragma } from "@mdx-js/react";
import { MyThemeContext } from "../context";
import { useContext } from "react";
// import { Styled } from "../styled";

import { jsx } from "../context";

const mdx = context => (type, props, ...children) => {
  const { components } = useContext(context);
  //   const components = {};
  console.log("components", type, props, components);
  return mdxReactPragma.apply(undefined, [
    type,
    { ...props, components },
    ...children
  ]);
};
const mdxPragma = mdx(MyThemeContext);

export default ({ data }) =>
  console.log("template") || (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer scope={{ mdx: mdxPragma }}>{data.mdx.body}</MDXRenderer>
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
