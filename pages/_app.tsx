import App from "next/app";
import Head from "next/head";
import "reset-css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>nabeneko</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700&display=swap"
            rel="stylesheet"
          ></link>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-46137790-10"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-46137790-10');
            `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
