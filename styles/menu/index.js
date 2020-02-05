import styled from 'styled-components'

export const MenuBackgroundWrapper = styled.section`
position: fixed;
top: 0;
padding-top: 6vh;
width: 100%;
height: 100%;
background-color: black;
color: white;
z-index: 1000;
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
width: 100%;
border-bottom: 1px solid rgba(255,255,255, 0.8);
margin: 4% auto;
text-align: center;
a{
  padding: 1rem;
  display: inline-block;
  font-size: calc(100% + 1vw);
  font-weight: 300;
}
`