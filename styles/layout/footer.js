import styled from 'styled-components'

import variables from 'styles/variables'

export const FooterContainer = styled.footer`
color: ${variables.footerFontColor};
background-color: ${variables.footerBg};
min-height: 100vh;
padding: 0 ${variables.contentMarginHorizontal};
display: grid;
grid-row-gap: 2rem;
grid-template-areas:
"footer-main"
"contacts"
"links"
"footer-logo";
`

export const FooterMain = styled.section`
grid-area: footer-main;
`

export const ContactsContainer = styled.address`
grid-area: contacts;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

export const FooterLinksContainer = styled.ul`
grid-area: links;
padding: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: 2vw 0;
`

export const FooterLink = styled.li`
grid-area: footer-logo;
margin-bottom: 1rem;
color: ${variables.footerLogoFontColor};
font-weight: 900;
font-size: 0.8rem;
`




export const FooterHeading = styled.h2`
color: ${variables.footerFontHighlightColor};
font-size: 18vw;
line-height: 0.8;
margin-bottom: 2rem;
`

export const ContactsLabelContainer = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
margin-right: 2rem;
`

export const ContactsLabel = styled.span`
margin: 1rem 0 0 auto;
font-style: normal;
font-weight: 900;
color: ${variables.footerFontHighlightColor};
`

export const ContactsDetailsContainer = styled(ContactsLabelContainer)`
justify-content: flex-start;
align-items: flex-start;
margin: 0;
`

export const ContactsItem = styled.li`
margin-top: 1rem;
display: flex;
justify-content: space-between;
`

export const FooterLinksLeftContainer = styled.ul`
padding: 0;
display: flex;
flex-direction: column;
justify-content: flex-start;
min-width: 8rem;
margin: 0;
`
export const FooterLinksRightContainer = styled(FooterLinksLeftContainer)`
flex-direction: column;
justify-content: flex-end;
text-align: right;
min-width: 8rem;
`

export const FooterLogo = styled.h3`
margin: 0 0 2rem 0;
text-align: center;
font-size: 1.4rem;
color: ${variables.footerLogoFontColor} !important;
font-weight: 900;
line-height: 0.8;
`