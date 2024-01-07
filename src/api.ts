import axios from "axios";

export const api = axios.create({
  baseURL: "  https://sopa-shop.onrender.com/",
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
