import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react"

import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req } = ctx
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/style/tailwind.output.css" />
          <meta name="google-site-verification" content="3tjDrUqucWZDX0vyXQivt3WWfSgxDKJcBVNhQqefLuk" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
          <div id="modals"></div>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-MGV16WG54E"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-MGV16WG54E');`
            }}
          />
        </body>
      </Html>
    )
  }
}
