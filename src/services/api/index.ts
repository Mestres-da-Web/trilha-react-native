import client from "./client";

const api = {
  async login(data: { email: string; password: string }): Promise<void> {
    const response = await client.post("/session", data);

    console.log(response);
  },
};

export default api;
