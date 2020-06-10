import App from "next/app";
import Head from "next/head";
import "reset-css";

import { title, description } from "../config";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/karate.png" />
          <meta name="description" content={description}></meta>
          <meta property="og:image:width" content="500"></meta>
          <meta property="og:image:height" content="500"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:site_name" content={title}></meta>
          <meta property="og:title" content={title}></meta>
          <meta property="og:description" content={description}></meta>
          <meta property="twitter:card" content="summary"></meta>
          <meta property="twitter:title" content={title}></meta>
          <meta property="twitter:description" content={description}></meta>
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
