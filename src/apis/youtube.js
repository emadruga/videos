import axios from "axios";

const KEY = "AIzaSyCB72GXCMQFfnVrDXIXJcUU9QuL5G3CqEg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
