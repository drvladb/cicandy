import axios from "axios";

const _axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_URL
      : process.env.REACT_APP_DEV_URL,
});

export { _axios as axios };
