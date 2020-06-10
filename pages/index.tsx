import Head from "next/head";
import qs from "querystring";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { createImage } from "../libs/imageFuctory";
import { postImage } from "../libs/imgur";
import { ogpImage, rootUrl } from "../config";

const imagePath = "/karate.png";
const IndexPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("🍣");
  const [imageBase64, setImageBase64] = useState<string>("");
  const _share = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const postId = await postImage(imageBase64);
      const shareUrl = location.origin + "/share/" + postId;
      const twContent = {
        url: shareUrl,
        text: "This is my nabeneko! #NabemekoMaker ",
      };
      window.open("https://twitter.com/share?" + qs.stringify(twContent));
    } catch {}
    setIsLoading(false);
  };
  useEffect(() => {
    const createImageFromText = async () => {
      setImageBase64(await createImage(imagePath, text));
    };
    createImageFromText();
  }, [text]);
  return (
    <>
      <Head>
        <meta property="og:url" content={rootUrl}></meta>
        <meta property="og:image" content={ogpImage}></meta>
        <meta property="twitter:image" content={ogpImage}></meta>
      </Head>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>🍲Nabeneko😺 Maker</h1>
        <input
          className={styles.input}
          onChange={e => setText(e.target.value)}
          value={text}
          type="text"
        />
        <img className={styles.img} src={imageBase64 || imagePath}></img>
        <button className={styles.share} onClick={_share}>
          {isLoading ? "posting image..." : "Share on Twitter"}
        </button>
      </div>
    </>
  );
};

export default IndexPage;
