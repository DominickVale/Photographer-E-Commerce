/**
 * https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js
 * 
 * [...] we are extending the <Document /> and injecting the server side rendered styles into the <head>, 
 * and also adding the babel-plugin-styled-components (which is required for server side rendering).
 */

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}