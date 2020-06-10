import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { createImage } from "../libs/imageFuctory";

const imagePath = "/karate.png";
const IndexPage = () => {
  const [imageBase64, setImageBase64] = useState<string>("");
  const [text, setText] = useState<string>("🍣");
  useEffect(() => {
    const createImageFromText = async () => {
      setImageBase64(await createImage(imagePath, text));
    };
    createImageFromText();
  }, [text]);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>🍲Nabeneko😺 Maker</h1>
      <input
        className={styles.input}
        onChange={e => setText(e.target.value)}
        value={text}
        type="text"
      />
      <img className={styles.img} src={imageBase64 || imagePath}></img>
    </div>
  );
};

export default IndexPage;
