import { useEffect } from "react";
import Head from "next/head";

const App = ({ id }: { id: string }) => {
  const ogpImage = `https://i.imgur.com/${id}.png`;
  const shareUrl = `https://nabenekomaker.now.sh/share/${id}`;
  useEffect(() => {
    setTimeout(() => {
      location.replace("/");
    }, 1000);
  }, []);
  return (
    <div>
      <Head>
        <meta property="og:url" content={shareUrl}></meta>
        <meta property="og:image" content={ogpImage}></meta>
        <meta property="twitter:image" content={ogpImage}></meta>
      </Head>
    </div>
  );
};

App.getInitialProps = async ({ query }: { query: { id: string } }) => {
  return { id: query.id };
};

export default App;
