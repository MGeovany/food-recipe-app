import axios from "axios";
import { API_KEY } from "../config";

export const translate = async (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", text);
  encodedParams.set("target", "es");
  encodedParams.set("source", "en");

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",

      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error(error);
  }
};
