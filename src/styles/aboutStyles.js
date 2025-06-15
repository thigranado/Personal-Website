import styled from 'styled-components';
import {LightUp} from '../keyframes.jsx';

    export const MainContainer = styled.main`
            margin-bottom: 40px;
            margin-top: 5%;
    `

    export const MainTitle = styled.h1`
        font-size: 4rem;
        margin: 0;
    `

    export const MainSubtitle = styled.p`
        margin: 0;
        font-size: 1rem;
    `

    export const FlexContainer = styled.div`
        display: flex;
        margin: 8% 2%;
        
    `

    export const TimelineDiv = styled.div`
        background-color: transparent;
        width: 100%;
        height: 25px;
        display: flex;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    `

    export const Premier = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Deuxieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Troiseme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Quatrieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Cinquieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Sixieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Septieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Huitieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Neuvieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Dixieme = styled.div`
        background-color: transparent;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: purple;
        }
    `

    export const Year = styled.h2`
        margin: 0;
        font-size: 1.5rem;
        font-family: Times New Roman;
    `

    export const Content = styled.p`
        display:  ${(props) => (props.visible ? 'block' : 'none')};
        margin: 0;
    `

    export const TogButton = styled.button`
        padding: 10px 25px;
        background-color: rgba(231, 231, 231, 0.11);;
        border: 1px solid white;
        
        &:hover{
            border: 1px solid white;
        }
    `
