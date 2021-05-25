import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section() {
    return (
        <Wrap>
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/site.mp4" />
            </video>
            <Fade bottom>
                <ItemText>
                    <h1>LA LUZ FOUNDATION</h1>
                    <p>At The La Luz Foundation we build relationships and challenge individuals to act on their faith and values to create healthier communities.</p>
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

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;

video{
    object-fit: fill;
    max-height: 100vh;
    min-width: 100vw;
    position: absolute;
    top: 0px;
    filter: brightness(50%);
    z-index: 0;
}
`

const ItemText = styled.div`
    padding-top: 35vh;
    opacity: 0.65;
    color: white;
    margin-left: 10%;
    text-align: left;
    font-weight: 600;
    width: 50%;

        h1 { 
            font-size: 100px;
        }

        p {
            line-height: 2.4;
            margin-top: 2%;
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