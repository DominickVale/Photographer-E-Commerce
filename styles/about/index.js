import styled from 'styled-components'
import variables from 'styles/variables'


export const AboutWrapper = styled.main`
margin-top: -20vh;
margin-bottom: 20vh;
min-height: 100vh;
width: 100%;
display: grid;
max-height: 70vh;
grid-template-rows: 1fr 40vh auto 1rem;
grid-template-areas: 
"title"
"image"
"text";
@media only screen and (min-width: 720px){
  margin: 12vh auto 0 24vw;
  grid-template-columns: 30vw 26vw;
  max-width: 70vw;
  grid-column-gap: 4rem;
  grid-template-rows: 20vh 1rem;
  grid-template-areas:
  "image text"
}
@media only screen and (min-width: 1440px){
  grid-column-gap: 2rem;
  max-width: 70vw;
}
`
export const StyledAbout = styled.h1`
grid-area: title;
font-size: 16vw;
color: white;
background-color: ${variables.productTitleBGColor};
padding: 1vw;
position: relative;
bottom: -2vh;
max-width: 50vw;
vertical-align: center;
align-self: center;
text-align: center;
margin-bottom: -8vh;
@media only screen and (min-width: 720px){
  font-size: 8rem;
  position: absolute;
  top: -2vh;
  left: 0;
  height: 20vh;
}
@media only screen and (min-width: 1140px){
  height: 1px;
  background: none;
  font-size: 30vh;
  transform: rotate(-90deg);
  top: 30vh;
  left: -9vw;
  color: rgba(255,255,255,0.1);
  mix-blend-mode: difference;
}
`

export const AboutImage = styled.img`
width: auto;
height: 100%;
max-height: 40vh;
object-fit: cover;
margin: 0 auto;
@media only screen and (min-width: 720px){
  width: 100%;
  max-width: 50vh;
  height: auto;
  margin: 0 auto;
  max-height: unset;
}
`

export const AboutText = styled.p`
grid-area: text;
max-width: 22rem;
`

export const DominickSays = styled.span`
position: relative;
grid-area: dominick;
font-weight: 900;
margin-top: 2rem;
padding-left: 1rem;
&::before{
  content: "";
  position: relative;
  display: inline-block;
  height: 2px;
  width: 2rem;
  background-color: ${variables.productTitleBGColor};
  left: -1rem;
  bottom: 0.2rem;
}
`