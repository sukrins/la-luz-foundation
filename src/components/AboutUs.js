import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function AboutUs() {
    return (
        <Wrap id="about-us">
            <Fade bottom>
                <ItemText>
                    <h1>About LLF</h1>
                    <p>LLF sees higher education as an agent of change for individuals, families, and communities. We envision a community that recognizes the importance of educational attainment and assures positive educational outcomes are accessible to all regardless of economic circumstance. </p>
                    <br />
                    <br />
                    <br />
                    <img src='/images/aboutus1.jpg' />
                    <p>
                        To build this community, LLF will:
                        <ul>
                            <li>Promote and provide financial support for postsecondary education.</li>
                            <li>Advise students and their families on how to save for and afford college.</li>
                            <li>Target underserved and often overlooked students, but not limited to the Morton College district.</li>
                        </ul>
                    </p>
                    <br />
                    <br />
                    <br />
                    <img src='/images/aboutus2.jpg' />
                    <p>In addition, LLF has been formed for the purpose of performing all things incidental to, or appropriate in, the foregoing specific and primary purposes. However, the LLF shall not, except to an insubstantial degree, engage in any activity or exercise of any powers which are not in the furtherance of its primary non-profit purposes.</p>
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
        padding-top: 0;
        padding-bottom: 10vh;
    }

    @media(max-width: 768px){
        padding-top: 7vh;
        padding-bottom: 10vh;
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