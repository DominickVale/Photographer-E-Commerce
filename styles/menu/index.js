import styled, {keyframes} from 'styled-components'
import variables from 'styles/variables';

export const SlideDown = keyframes`
from{
  transform: translateY(-100vh);
};
to{
  transform: translateY(0);
};
`;

export const MenuBackgroundWrapper = styled.section`
position: fixed;
top: 0;
padding-top: 6vh;
width: 100%;
height: 100%;
background-color: ${variables.menuBGColor};
color: white;
z-index: 1000;
animation: ${SlideDown} 0.3s ease;
`

export const MenuWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 4%;
height: 100vh;
margin: auto;
justify-content: flex-start;
align-content: center;
align-items: center;
`

export const MenuHeading = styled.span`
display: flex;
width: 100%;
justify-content: space-between;
border-bottom: 18px solid white;
margin-bottom: calc(8vh - 6vw);
`

export const MenuLinksWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 50%;
`

export const MenuTitle = styled.h1`
font-weight: 900;
font-size: 10vw;
margin: 0;
`

export const MenuLink = styled.li`
position: relative;
width: 100%;
margin: 4% auto;
text-align: center;
cursor: pointer;
a{
  padding: 1rem;
  color: ${variables.menuLinkColor} !important;
  display: inline-block;
  font-size: calc(100% + 1vw);
  font-weight: 300;
  transition: all 0.4s ease;
};
&::after{
  content:"";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: white;
  transition: all 0.2s ease;
}
&:hover{
  &::after{
    width: 100%;
  }
  a{
    color: white !important;
    transform: scale(1.2);
  }
}
`