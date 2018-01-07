import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet'; 
import styled from 'styled-components';

import {colours} from '../DesignSystem';

import Navigation from '../components/Navigation';


class TemplateWrapper extends React.Component {

  constructor(props) {
    super(props)
    this.state = { exiting: false}
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: true })
    }
    console.log(nextProps)
  }
  componentDidUpdate(){
    console.log('updated')

  }

  render() {
    const {children} = this.props
    return (
      <Container pageTransitioning={this.state.exiting}>
        <Helmet title="Thomas Brasington">
        <script type="text/javascript">{`
        (function(d) {
          var config = {
            kitId: 'baw2mif',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
        `}</script>
        <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet" />
        <style>{`
          * { box-sizing: border-box; }
          html,body { margin: 0; display:block;}
          `}
        </style>
        </Helmet>
        <NavigationContainer><Navigation /></NavigationContainer>
        <PageContainer>{children()}</PageContainer>
      </Container>
  )
}
};

const Container = styled.div`
background : ${colours.black};
min-height:100vh;
position:relative;
`
const NavigationContainer = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
min-height:100%;
height:auto;
z-index:1;
`
const PageContainer = NavigationContainer.extend`
z-index:2;
background: ${colours.grey};
`

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;