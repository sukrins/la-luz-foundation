import React from 'react'
import styled from 'styled-components';
import { selectMembers } from '../features/member/memberSlice';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade'

function Member() {
    const members = useSelector(selectMembers);

    return (
        <Container>
            <Fade bottom>
                <ItemText>
                    <h1>Our Members</h1>
                </ItemText>
            </Fade>
            <Content>
                {members && members.map((member, index) =>
                    <Wrap>
                        <a key={index} href='#'>
                            <img src='/images/aboutus1.png' />
                            <h3>{member.name}</h3>
                            <p>{member.desc}</p>
                        </a>
                    </Wrap>
                )}
            </Content>
        </Container>
    )
}

export default Member

const Container = styled.div`
min-height: 100vh;
width: 100vw;
background: black;
opacity: 0.8;
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
`

const Content = styled.div`
    margin-top: 10%;
    padding-bottom: 10%;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    
        &:hover {
            transform: scale(1.05);
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            border-color: rgba(249, 249, 249, 0.8);
        }
`