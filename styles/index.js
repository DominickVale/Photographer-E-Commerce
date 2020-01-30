import styled from 'styled-components'

export const Filler = styled.div`
height: ${props => props.height};
width: ${props => props.width || '10vw'};
`

export const StyledActionButton = styled.button`
display: block;
background-color: white;
font-weight: 900;
border: none;
padding: 1rem 2rem;
border: 1px solid black;
margin: auto;
`