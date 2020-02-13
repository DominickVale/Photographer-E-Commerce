import React from 'react'
import { StyledAbout, AboutWrapper, AboutText, AboutImage, DominickSays } from 'styles/about'
import Layout from 'components/layout'


const about = () => {
  return (
    <Layout>
      <AboutWrapper>
        <StyledAbout>About</StyledAbout>
          <AboutImage src="https://unsplash.com/photos/DiCgxJDJQSc/download?force=true" alt="Image of the photographer" />
        <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sagittis, facilisis amet quis viverra. Ultrices sapien sed habitasse sem pretium interdum sed tincidunt. Fermentum, mauris, tempus eu, iaculis mi feugiat. Tellus integer iaculis duis eget. Empus nunc nisl. <br /><br />&nbsp;<DominickSays>Dominick&nbsp;Vale</DominickSays></AboutText>
      </AboutWrapper>
    </Layout>
  )
}

export default about
