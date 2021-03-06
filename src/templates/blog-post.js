import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import rehypeReact from "rehype-react"

import HeaderComponent from '../components/HeaderComponent'

import {colours,breakpoints,typeStyles, spacing,gridSettings} from '../DesignSystem';

// register components
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "header-component": HeaderComponent },
}).Compiler

export default class BlogPage extends React.Component {

  render() {
    const { markdownRemark: post } = this.props.data;
    return (
      <Container>
        
        <Helmet title={`Blog | ${post.frontmatter.title} `} />
        <HeaderComponent title={post.frontmatter.title} />
        <Grid>{renderAst(post.htmlAst)}</Grid>
      </Container>
      )
  }
}


const Container = styled.div`
  position:relative;
  width:100%;
  @media (min-width: ${breakpoints.bp3}px) {
   
  }
`

const Grid = styled.div`


> div {
 width:100%;
padding: 0 ${spacing * 4}px;
}


>div > h1,
>div > h2,
>div > h3,
>div > h4,
>div > h5,
>div > p,
>div > ul,
>div > ol,
>div > ul,
>div > .gatsby-highlight,
>div > table,
>div > blockquote,
>div > hr {
max-width: 1024px;
margin: 0 auto;
width:100%;
}

> div > h1 {  
  font-weight:normal;
  ${typeStyles.heading1.bp1};
    margin-bottom: ${spacing*3}px;
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.heading1.bp3};
  }
}

> div > h2 {
  font-weight:normal;
  ${typeStyles.heading2.bp1};
    margin-bottom: ${spacing*3}px;
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.heading2.bp3};
  }
}

> div > h3 {
  font-weight:normal;
  ${typeStyles.heading3.bp1};
    margin-bottom: ${spacing*3}px;
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.heading3.bp3};
  }
}

> div > h4 {
  font-weight:normal;
  ${typeStyles.heading4.bp1};
    margin-bottom: ${spacing*3}px;
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.heading4.bp3};
  }
}

> div > h5 {
  font-weight:normal;
  ${typeStyles.heading5.bp1};
    margin-bottom: ${spacing*3}px;
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.heading5.bp3};
  }
}
> div > ul,
> div > ol,
> div > p {
  font-weight:normal;
  color: ${colours.darkGrey};
  ${typeStyles.paragraph2.bp1};
  margin-bottom: ${spacing*3}px;
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.paragraph2.bp3};
    margin-bottom: ${spacing*3}px;
  }
}

>div > hr {
  margin-bottom: ${spacing*3}px;
  border:none;
  background:${colours.darkGrey};
  height:1px;
}

pre {
  border-radius:3px;
}

> div > p > code {
  background : #282c34;
  color:#ABB2BF;
  padding: 8px;
  border-radius:3px;
  font-size: 100%;
  ${typeStyles.paragraph3.bp1};
  @media (min-width: ${breakpoints.bp3}px) {
    ${typeStyles.paragraph3.bp3};
  }
}
`

        
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;


