import Document, { Head, Html, Main, NextScript } from 'next/document'

class CustomDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonyomous"
          />
        </Head>
        <body className="bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


export default CustomDocument;
