import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const client = axios.create({
  baseURL: "http://10.0.2.2:4000",
});

client.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("access_token");

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default client;
