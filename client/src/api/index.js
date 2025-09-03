import axios from "axios";
import blogsData from "./blogs.json";
import servicesData from "./services.json";

// Toggle this flag to switch between API and local JSON
const USE_LOCAL = true;

const API = axios.create({ baseURL: "http://localhost:4444/" });
// const API = axios.create({ baseURL: "https://zeevoc-server.onrender.com" });

export const signUp = (formData) => API.post("/user/signup/userType", formData);
export const signIn = (formData) => API.post("/user/signin", formData);

// Blogs
export const getBlogList = async (page) => {
  if (USE_LOCAL) {
    // mimic axios.get response structure
    return { data: blogsData };
  }
  return API.get(`blog/all?page=${page}`);
};

// Services
export const getAllServices = async (page) => {
  if (USE_LOCAL) {
    // mimic axios.get response structure
    return { data: servicesData };
  }
  return API.get(`service/all?page=${page}`);
};
