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
          <link rel="stylesheet" href="/tailwind.output.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modals"></div>
        </body>
      </Html>
    )
  }
}
