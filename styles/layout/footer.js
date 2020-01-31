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
@media only screen and (min-width: 1140px){
  grid-template-areas:
  "footer-main . ."
  "footer-main . contacts"
  "footer-logo footer-logo footer-logo"
  "links . .";
}
`

export const FooterMain = styled.section`
grid-area: footer-main;
& p{
  max-width: 30rem;
}
`

export const ContactsContainer = styled.address`
grid-area: contacts;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
max-width: 36rem;
`

export const FooterLinksContainer = styled.ul`
grid-area: links;
padding: 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: 2vw 0;
@media only screen and (min-width: 1140px){
  max-width: 20rem;
  align-self: flex-end;
}
`

export const FooterLogo = styled.h3`
grid-area: footer-logo;
margin: 0 0 2rem 0;
text-align: center;
font-size: 1.4rem;
color: ${variables.footerLogoFontColor} !important;
font-weight: 900;
line-height: 0.8;
align-self: flex-end;
& a{
  height: 1rem;
}
@media only screen and (min-width: 1140px){
  position: relative;
  height: 1rem;
  margin: 0;
  bottom: -2rem;
}
`


export const FooterHeading = styled.h2`
color: ${variables.footerFontHighlightColor};
font-size: 18vw;
line-height: 0.8;
margin-bottom: 2rem;
@media only screen and (min-width: 1140px){
  font-size: calc(10vh + 6rem);
  max-width: 60rem;
}
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
text-align: right;
min-width: 8rem;
`

export const FooterLink = styled.li`
margin-bottom: 1rem;
color: ${variables.footerLogoFontColor};
font-weight: 900;
font-size: 0.8rem;
`