import axios from "axios";

const createAxiosInstance = () => {
  let config = axios.create({
    baseURL: "https://opentdb.com/api.php?" //TODO: replace with env: process.env.VUE_APP_TRIVIA_GAME_URL
  });

  return config;
};

const responseHandler = response => {
  return {
    error: false,
    status: response.status,
    statusText: response.statusText,
    data: response.data
  };
};
const errorHandler = error => {
  return {
    error: true,
    status: error.response.status,
    statusText: error.response.statusText,
    data: error.response.data
  };
};

export default {
  axiosInstance: createAxiosInstance(),

  async getQuiz(amount, category, difficulty, type) {
    try {
      let response = await this.axiosInstance.get(
        `amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
      );
      return responseHandler(response);
    } catch (error) {
      return errorHandler(error);
    }
  }
};
