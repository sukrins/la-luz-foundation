import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function AboutUs() {
    return (
        <Wrap id="mission">
            <Fade bottom>
                <ItemText>
                    <h1>Mission</h1>
                    <p>La Luz Foundation (LLF) inspires, encourages, and supports Morton College by providing scholarships to current and prospective Morton College students who otherwise would not have the financial means to fulfill their educational goals.</p>
                    <br />
                    <br />
                    <br />
                    <img src='/images/mission.jpg' />
                </ItemText>
            </Fade>
        </Wrap>
    )
}

export default AboutUs

const Wrap = styled.div`
min-width: 100vw;
min-height: 100vh;
background: #444444;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 25%;

@media(max-width: 1024px){
    padding: 0 10%;
}
`

const ItemText = styled.div`
padding-top: 20vh;
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

    ul {
        padding-left: 50px;
    }

    @media(max-width: 540px){
        padding-top: 10vh;
        padding-bottom: 10vh;

        h1{
            font-size: 45px;
            margin-bottom: 10%;
            width: 100%;
            text-align: center;
        }

        p {
            margin-top: 25%;
            width: 100%;
        }
    }

    @media(max-width: 1024px){
        padding-bottom: 0;
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