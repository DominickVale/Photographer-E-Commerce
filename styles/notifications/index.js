import styled from 'styled-components'
import variables from 'styles/variables'

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
`

export const NotificationContent = styled.div`

`