import { keyframes } from 'styled-components';

export const Pulsation = keyframes`
        0%, 100% {};
        50% {transform: scale(1.07)};
    `

export const PaintNoPaint = keyframes`
0%, 100% {
            color:rgb(199, 196, 196)
        };

50% {
        color:rgb(182, 159, 27);
    }`

export const LightUp = keyframes`
    0%, 100% {};
    50%{border-left: 2px solid white};
`