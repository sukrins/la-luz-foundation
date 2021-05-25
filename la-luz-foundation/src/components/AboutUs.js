import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function AboutUs() {
    return (
        <Wrap>
            <Fade bottom>
                <ItemText>
                    <h1>Our Story</h1>
                    <p>For 31 years, The Resurrection Project has been committed to its mission of creating community ownership, building community wealth, and serving as stewards of community assets in Chicago’s southwest neighborhoods.
                        <br />
                        <br />
                        In 1990, Chicago’s Pilsen neighborhood was blighted by neglect and violence. A small group of frustrated residents band together with the goal of restoring peace, safety, and prosperity to their community. Six local parishes contributed a total of $30,000 in seed money, and soon The Resurrection Project was established.</p>
                    <br />
                    <br />
                    <br />
                    <img src='/images/aboutus1.png' />
                    <p>For 31 years, The Resurrection Project has been committed to its mission of creating community ownership, building community wealth, and serving as stewards of community assets in Chicago’s southwest neighborhoods.
                        <br />
                        <br />
                        In 1990, Chicago’s Pilsen neighborhood was blighted by neglect and violence. A small group of frustrated residents band together with the goal of restoring peace, safety, and prosperity to their community. Six local parishes contributed a total of $30,000 in seed money, and soon The Resurrection Project was established.</p>
                    <br />
                    <br />
                    <br />
                    <img src='/images/aboutus2.jpeg' />
                    <p>For 31 years, The Resurrection Project has been committed to its mission of creating community ownership, building community wealth, and serving as stewards of community assets in Chicago’s southwest neighborhoods.
                        <br />
                        <br />
                        In 1990, Chicago’s Pilsen neighborhood was blighted by neglect and violence. A small group of frustrated residents band together with the goal of restoring peace, safety, and prosperity to their community. Six local parishes contributed a total of $30,000 in seed money, and soon The Resurrection Project was established.</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <Buttons>
                    <DownArrow src='/images/down-arrow.svg' />
                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default AboutUs

const Wrap = styled.div`
width: 100vw;
min-height: 100vh;
background: black;
opacity: 0.35;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 25%;
`

const ItemText = styled.div`
padding-top: 25vh;
opacity: 0.65;
color: white;
text-align: left;
font-weight: 600;

    h1 { 
        font-size: 50px;
    }

    p {
        line-height: 2.4;
        margin-top: 10%;
    }

    img {
        width: 100%;
        height: 100%;
    }
`

const Buttons = styled.div``

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
cursor: pointer;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`