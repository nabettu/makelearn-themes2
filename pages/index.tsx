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
  const [shareUrl, setShareUrl] = useState<string>("");
  const [text, setText] = useState<string>("🍣");
  const [imageBase64, setImageBase64] = useState<string>("");
  const _finish = async () => {
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
      setShareUrl("https://twitter.com/share?" + qs.stringify(twContent));
    } catch {}
    setIsLoading(false);
  };
  const _share = () => window.open(shareUrl);
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
        {!shareUrl && (
          <input
            className={styles.input}
            onChange={e => setText(e.target.value)}
            value={text}
            type="text"
          />
        )}
        <img className={styles.img} src={imageBase64 || imagePath}></img>
        <button className={styles.share} onClick={shareUrl ? _share : _finish}>
          {shareUrl
            ? "Share on Twitter"
            : isLoading
            ? "posting image..."
            : "Create Image"}
        </button>
      </div>
    </>
  );
};

export default IndexPage;
