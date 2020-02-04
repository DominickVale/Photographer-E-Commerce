import styled,{css} from 'styled-components'

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
@media only screen and (min-width: 1140px){
  margin: ${props => props.styleProduct ? 'auto': '0'};
}
${props => props.maxWidth && css`
width: ${props.maxWidth};
`}
`

export const StyledActionButton = styled.button`
background-color: white;
font-weight: 900;
border: none;
padding: 1rem 2rem;
border: 1px solid black;
${props => props.styleProduct && css`
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
`}
`

export const ActionButtonLabel = styled.span`
font-size: 0.8rem;
text-align: center;
margin: 0.2rem auto;
`