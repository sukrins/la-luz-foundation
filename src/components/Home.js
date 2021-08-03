import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import AboutUs from './AboutUs'
import Member from './Member'
import Mission from './Mission'

function Home() {
    return (
        <Container>
            <Section />
            <Mission />
            <AboutUs />
            <Member />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`