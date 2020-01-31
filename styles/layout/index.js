import styled from 'styled-components'

import variables from 'styles/variables'

export const Container = styled.main`
margin: 0 ${variables.contentMarginHorizontal};
@media only screen and (min-width: 1140px){
  article:nth-child(even){
    margin: 10vh 0 20vh auto;
    display: grid;
    align-content: flex-start;
    justify-content: start;
    align-items: flex-start;
    grid-column-gap: 0;
    grid-template-columns: 2fr 2fr 6fr 4rem;
    grid-template-rows: 2fr 1fr 2fr 1fr;
    grid-template-areas:
    "title title image date"
    "description description image date"
    "action . image date"
    ". . image date";
    figure{
      margin-left: 2rem;
    }
  }
}
`