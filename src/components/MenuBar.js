import React , {Component} from 'react';
import { connect } from "react-redux"
import Link from 'gatsby-link'
import styled from 'styled-components';
import {typeStyles,colours, spacing,breakpoints,getTransitionStyle} from '../DesignSystem';

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    color:${colours.white};
    background:${colours.blue};
    ${typeStyles.heading6.bp1};
    @media (min-width: ${breakpoints.bp3}px) {
        ${typeStyles.heading6.bp3};
    }

    span, a {
        color:${colours.white};
        text-decoration:none;
        padding: 0 ${spacing*2}px;
        cursor:pointer;
        width:auto;
        height:100%;
        background:${colours.blue};
        display:flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        ${getTransitionStyle({type : 'crossFade', timing : 't5', delay: 't0' })}

        @media (min-width: ${breakpoints.bp3}px) {
        }

        &:hover {
            background:${colours.darkBlue};
            ${getTransitionStyle({type : 'crossFade', timing : 't5', delay: 't0' })}
        }
    }
`
const mapStateToProps = ({ menuOpen }) => {
  return { menuOpen }
}
  
const mapDispatchToProps = dispatch => {
    return { openMenu: () => dispatch({ type: `OPENMENU`  }) }
}

const MenuBar = ({ items,openMenu}) => (
    <Container>
    <span href="#" onClick={openMenu} >Menu</span>
    {items.map((item,i)=>{
        return <Link key={i} to={item.url}>{item.label}</Link>
    })}
    </Container>
);


export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
