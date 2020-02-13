import styled,{css} from 'styled-components'
import variables from 'styles/variables'

export const Filler = styled.div`
  height: ${props => props.height};
  width: ${props => props.width || '10vw'};

  ${props => props.hideDesktop && css`
    @media only screen and (min-width: 720px) {
        display: none;
      }
    `};
`

export const ActionButtonWrapper = styled.div`
grid-area: action;
justify-self: start;
display: flex;
flex-direction: column;
align-content: center;
margin: 0 auto;
${props => props.styleProduct && css`
margin: 0 auto 0 0;
`}
@media only screen and (min-width: 1140px){
  margin: ${props => props.styleProduct ? '0 auto 0 0': '0'};
}
${props => props.maxWidth && css`
width: ${props.maxWidth};
`}
`

export const StyledActionButton = styled.button`
position: relative;
cursor: pointer;
background: ${variables.bodyBGColor};
font-weight: 900;
border: none;
padding: 1rem 2rem;
border: 1px solid black;
overflow: hidden;
p{
  position: relative;
  transition: all .30s ease-in-out;
  margin: 0;
  color: black;
  z-index: 100 !important;
};
&::before{
  content: "";
  display: inline-block;
  background-color: black;
  width: 0%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  transition: all 0.25s ease-in;
}
&:hover{
  border: 1px solid white;
  p{
    color: white;
  }
  &::before{
    width: 100%;
  }
}
${props => props.styleProduct && css`
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
  margin: 0;
`}
`

export const ActionButtonLabel = styled.span`
font-size: 0.8rem;
text-align: center;
margin: 0.2rem auto;
`