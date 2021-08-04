import React from 'react'
import styled from 'styled-components';
import { selectMembers } from '../features/member/memberSlice';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade'

function Member() {
    const members = useSelector(selectMembers);

    return (
        <Container id="members">
            <Fade bottom>
                <ItemText>
                    <h1>Our Members</h1>
                </ItemText>
                {members && members.map((member) =>
                    <MemberText>{member.name}</MemberText>
                )}
            </Fade>
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

@media(max-width: 1024pxpx){
    padding: 0 10%;
}
`

const ItemText = styled.div`
padding-top: 20vh;
padding-bottom: 10vh;
opacity: 0.65;
color: white;
text-align: left;
font-weight: 600;

    h1 { 
        font-size: 50px;
    }

    @media(max-width: 540px){
        padding-top: 10vh;
        padding-bottom: 10vh;
        text-align: center;
    }
`

const MemberText = styled.div`
opacity: 0.65;
color: white;
text-align: left;
font-weight: 500;
font-size: 20px;
padding-bottom: 3vh;

@media(max-width: 540px){
    text-align: center;
}
`