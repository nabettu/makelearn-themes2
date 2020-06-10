export const loadImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = e => reject(e);
    img.src = src;
  });
};

const canvasSizeX = 500;
const canvasSizeY = 500;

export const createImage = async (imagePath: string, text: string) => {
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
  return canvas.toDataURL("png");
};
