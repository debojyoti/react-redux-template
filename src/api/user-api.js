import { ProtectedHttpClient, PublicHttpClient } from "src/clients/http-client";

const UserApi = {
  public: {
    login: async (email, password) => {
      PublicHttpClient.post("/login", { email, password });
    },
  },
  private: {
    getProfile: async () => {
      ProtectedHttpClient.get("/profile");
    },
  },
};

export default UserApi;
