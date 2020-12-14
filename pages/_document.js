import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <scrip async src="https://www.googletagmanager.com/gtag/js?id=G-VE21KYC672"></scrip>
          <script
              dangerouslySetInnerHTML={{
                  __html: `
                  [window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  
                  gtag('config', 'G-VE21KYC672');]
                  `,
              }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument