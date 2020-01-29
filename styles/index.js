import styled from 'styled-components'

export const Filler = styled.div`
height: ${props => props.height};
width: ${props => props.width || '10vw'};
`