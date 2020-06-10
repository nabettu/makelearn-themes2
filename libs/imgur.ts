import axios from "axios";

const CLIENT_ID = "b4199d886203468";
const API_PATH = "https://api.imgur.com/3/image";

declare global {
  interface Window {
    gtag: (event: string, name: string, content: any) => void;
  }
}

export const postImage = async (base64: string) => {
  const res = await axios({
    method: "POST",
    url: API_PATH,
    data: {
      image: base64.replace(new RegExp("data.*base64,"), ""),
      type: "base64",
    },
    headers: { Authorization: "Client-ID " + CLIENT_ID },
  }).then(res => res.data.data);
  const { deletehash, id } = res;
  window.gtag("event", "upload", {
    event_category: id,
    event_label: deletehash,
  });
  return id;
};
