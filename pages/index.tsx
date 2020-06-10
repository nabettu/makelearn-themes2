import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { loadImage } from "./libs/imageFuctory";

const imagePath = "/karate.png";
const canvasSizeX = 500;
const canvasSizeY = 500;
const IndexPage = () => {
  const [imageBase64, setImageBase64] = useState<string>("");
  const [text, setText] = useState<string>("🍣");
  useEffect(() => {
    const createImage = async () => {
      console.log(imagePath);
      const image: CanvasImageSource = await loadImage(imagePath);
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = canvasSizeX;
      canvas.height = canvasSizeY;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasSizeX, canvasSizeY);
        ctx.drawImage(image, 0, 0, canvasSizeX, canvasSizeY);
        ctx.font = "220px serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(text, 280, 110);
      }
      setImageBase64(canvas.toDataURL("png"));
    };
    createImage();
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
