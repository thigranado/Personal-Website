import styled from 'styled-components';
import {PaintNoPaint, Pulsation} from '../keyframes';

    export const MainContainer = styled.main`
    margin-bottom: 40px;
    margin-top: 50px;
    `

    export const InfoContainer = styled.main`
        margin-bottom: 180px;
        display: flex;
    `

    export const PdxDiv = styled.div`
        width: 45%;
        margin: 0 2.5em 0 5em;
        line-height: 1.1;
    `

    export const Paradox = styled.p`
        font-size: 6rem;
        font-family: Georgia, "Times New Roman", Times, serif;
        margin-top: 10px;
        color:rgb(233, 228, 228);
        font-weight: 500;

        span{
            animation: ${PaintNoPaint} 2.5s ease-in-out;
            animation-iteration-count: infinite;
            }
    `

    export const TallImage = styled.img`
        height: 460px;
        width: 265px;
        border-radius: 20px;
        margin-right: 20px;
        border: 1px solid white;
    `

    export const SmallImage = styled.img`
        height: 220px;
        width: 150px;
        border-radius: 20px;
        margin-bottom: 15px;
        border: 1px solid white;
    `

    export const Container = styled.section`
        display: flex;
        margin-bottom: 105px;
    `

    export const ImagesContainer = styled.section`
        display: flex;
    `

    export const SmallICont = styled.div`
        display: inline-block;
    `

    export const SContainer = styled.section`
        display: flex;
        margin-bottom: 195px;
        margin-left: 35px;
    `

    export const ProfilePicture = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 20px;
    margin-right: 60px;
    margin-left: 20%;
    `

    export const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
    color:rgb(233, 228, 228);
    `

    export const Quotation = styled.blockquote`
    margin: 0;
    margin: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    `

    export const CTA = styled.a`
    background-color:rgb(139, 122, 20);
    padding: 7px 30px;
    border-radius: 20px;
    border: 1px solid rgb(129, 112, 12);
    color:rgb(233, 228, 228);
    transition: all 0.4s ease-out;
    
    &:hover {
        background-color:rgb(151, 130, 12);
        color: white;
        transition: all 0.1s ease-out;
        }

        &:active{
        transition: all 0.1s ease-in-out;
            background-color: rgb(122, 105, 6);
            border: 1px solid transparent;
        }
`

    export const RightContainer = styled.div`
    border-radius: 20px;
    align-content: center; 
    border: 1px solid transparent;
`

    export const TextContainer = styled.div`
    animation: ${Pulsation} 3s ease-in-out;
    animation-iteration-count: infinite;
    padding-bottom: 30px;
`

    export const LinksContainer = styled.div`
        display: flex;
        justify-content: center;
        gap: 20px;
`

    export const FooterSection = styled.section`
    background-color: rgb(41, 40, 40);
    height: 30vw;
        align-itmes: bottom;
        font-family: Tahoma, sans-serif;
`

    export const FooterContent = styled.section`
        height: 100%;
        display: flex;
        justify-content: space-between;
`

    export const SubContainers = styled.div`
        background-color: inherit;
        width: 30%;
`

    export const FirstSubContent = styled.div`
        margin-top: 20%;
`

    export const SubContTitle = styled.h2`
    font-size: 1.8rem;
    text-align: left;
    margin-left: 30px;
`

    export const FSCSubTitle = styled.p`
        font-size: 1rem;
        text-align: left;
        margin-left: 30px;
`

    export const FormsDiv = styled.div`
        display: flex;
        height: 50px;
        justify-content: center;
        margin-top: 10%;
        margin-left: 2%;
`

    export const FSCInput = styled.input`
    margin-right: 5px;
    background-color: rgb(233, 223, 223);
    border: none;
    border-radius: none;
    color: black;
    font-family: Tahoma, sans-serif;
    width: 60%;
    
    &:{
        background-color: black;
        }
`

        export const FSCButton = styled.button`
        border-radius: 0;
        height: 100%;
        font-size: 1rem;
        background-color: rgb(107, 10, 10);
        border: 1px solid rgb(71, 6, 6);
        cursor: pointer;
        
        &:hover{
            background-color: rgb(134, 15, 15);
            border: 1px solid white;
            }
            
            &:active{
                background-color: rgb(110, 8, 8);
                }
`

        export const Content = styled.div`
            margin-top: 20%;
`

        export const SecondSubCTitle = styled.h2`
            font-size: 1.8rem;
            text-align: center;
`

    export const LinkSubContainer = styled.div`
        display: flex;
`

    export const NavigSubCont = styled.div`
        height: 13rem;
        background-color: inherit;
        width: 50%;
        padding: 1% 20%;
        display: grid;
        `
        
        export const ExploreLink = styled.a`
        color: white;
        background-color: inherit;
        margin-bottom: 30px;
    
`

    export const TopBtn = styled.button`
        margin-top: 15px;
        padding: 10px 30px;
        background-color:rgb(139, 122, 20);
        font-size: 0.9rem;
        border-radius: 10px;
        border: 1px solid rgb(119, 103, 9);
        transition: all 0.4s ease-out;
        cursor: pointer;
        
        &:hover {
            background-color:rgb(151, 130, 12);
            color: white;
            transition: all 0.1s ease-out;
            }
            
            &:active{
                transition: all 0.1s ease-in-out;
                background-color: rgb(122, 105, 6);
                border: 1px solid transparent;
                }
`

                export const SocialsContainer = styled.div`
                display: flex;
                background-color: inherit;
                margin-top: 10%;
                justify-content: center;
`

            export const SocialIcon = styled.a`
                margin-left: 20px;
                color:white;
                transition: all 0.5s ease-in-out;
        
                &:hover{
                transition: all 0.3s ease-in-out;
                color:rgb(119, 104, 17);
                }
        
                &:active{
                transition: all 0.1s ease-in-out;
                    color: rgb(82, 70, 2);}
`

            export const Name = styled.p`
            text-align: right;
            margin-right: 30px;
            margin-top: 20px;
`










    export const HomeFooter = styled.footer`
        background-color: inherit;
        display: flex;
        justify-content: center;
`