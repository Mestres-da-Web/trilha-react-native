import client from "./client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = {
  async login(data: { email: string; password: string }): Promise<void> {
    const response = await client.post("/session", data);

    const result = response.data;

    await AsyncStorage.setItem("access_token", result.access_token);
  },
};

export default api;
