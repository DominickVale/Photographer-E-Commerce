import styled, { keyframes } from 'styled-components'
import variables from 'styles/variables'


export const PopIn = keyframes`
  0%{
    transform: translateY(10vh);
    opacity: 0;
  };
  20%{
    transform: translateY(0);
    opacity: 1;
  };
  80%{
    transform: translateY(0);
    opacity: 1;
  };
  100%{
    transform: translateY(10vh);
    opacity: 0;
  };
`

export const NotificationWrapper = styled.div`
position: fixed;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
padding: 2rem 0;
min-width: 100%;
background-color: ${variables.productTitleBGColor};
color:${variables.footerFontHighlightColor};
font-size: 1rem;
font-weight: 400;
animation: ${PopIn} ${variables.popInDuration / 1000}s ease;
`

export const NotificationContent = styled.div`

`
