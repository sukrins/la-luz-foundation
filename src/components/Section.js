import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section() {
    return (
        <Wrap>
            <VideoContainer>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/videos/site.mp4" />
                </video>
            </VideoContainer>
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

@media(max-width: 767px){
    flex-direction: row;
}
`

const VideoContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height: 100%; 
overflow: hidden;

video{
    min-width: 100%; 
    min-height: 100%; 
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    filter: brightness(50%);
    transform: translate(-50%,-50%);
}
`

const ItemText = styled.div`
    padding-top: 35vh;
    opacity: 0.65;
    color: white;
    margin-left: 10%;
    text-align: left;
    font-weight: 600;
   
        h1 { 
            font-size: 100px;
            width: 50%;
            @media(max-width: 540px){
                font-size: 45px;
                margin-bottom: 10%;
                width: 100%;
            }
        }

        p {
            line-height: 2.4;
            margin-top: 2%;
            width: 50%;
            @media(max-width: 540px){
                width: 90%;
            }
        }
`

const Buttons = styled.div``

const DownArrow = styled.img`
margin-top: 20px;
margin-bottom: 20px;
height: 40px;
cursor: pointer;
overflow-x: hidden;
animation: animateDown infinite 1.5s;

@media(max-width: 540px){
    display: none;
}
`