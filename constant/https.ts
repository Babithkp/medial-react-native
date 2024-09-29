import axios from "axios";
export const getNews = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bfd4193523084bc1b2cb2df3ae3f4963"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
