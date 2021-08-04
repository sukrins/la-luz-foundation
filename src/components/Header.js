import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectMenuOptions } from '../features/menu/menuSlice';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-scroll";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const menuOptions = useSelector(selectMenuOptions);

    function getMenuOption(menuOption) {
        switch (menuOption) {
            case 'Mission':
                return 'mission';
            case 'About Us':
                return 'about-us';
            case 'Our Members':
                return 'members';
            case 'Apply Today':
                return '/#';
            default:
                return '/#';
        }

    }

    return (
        <Container>
            <img src='/images/logo.png' />

            <Menu>
                {menuOptions && menuOptions.map((option) =>
                    <Link to={getMenuOption(option)} spy={true} smooth={true} offset={50} duration={500}>
                        <span>{option}</span>
                    </Link>

                )}
            </Menu>
            <RightMenu>
                <DonateButton>
                    Donate
                </DonateButton>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {menuOptions && menuOptions.map((option, index) =>
                    <li key={index}>
                        <Link to={getMenuOption(option)} spy={true} smooth={true} offset={50} duration={500}>
                            <span onClick={() => setBurgerStatus(false)}>{option}</span>
                        </Link></li>
                )}
            </BurgerNav>
        </Container >
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        filter: brightness(0) invert(1);
        width: 30%;
        margin: -15px 0 -30px -10px;
        cursor: pointer;
        margin-right: 0px !important;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 30px;
        flex-wrap: nowrap;
        opacity: 0.75;
        cursor: pointer;
        span {
            letter-spacing: 1.42px;
            position: relative;
            color: white;
    
    
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
    
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
    
        }
    }

    @media(max-width: 825px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5%;
`

const CustomMenu = styled(MenuIcon)`
    display: none !important;
    cursor: pointer;
    margin-left: 25px;
    color: white;
    @media(max-width: 825px){
        display: block !important;
    }
`

const BurgerNav = styled.div`
    color: #393c41;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const DonateButton = styled.div`
height: 40px;
width: 150px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
text-transform: uppercase;
font-size: 13px;
cursor: pointer;
margin: 8px;
background: white;
opacity: 0.65;
color: black;
font-weight: 600;

&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    border-color: rgba(249, 249, 249, 0.8);
    transition: 0.3s;
    background: green;
    color: white;
    opacity: 1;
    }
`