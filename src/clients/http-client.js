import axios from "axios";

const ProtectedHttpClient = axios.create({
  baseURL: "http://localhost:3000/api/private",
});

const PublicHttpClient = axios.create({
  baseURL: "http://localhost:3000/api/public",
});

// Intercept token to ProtectedHttpClient
ProtectedHttpClient.interceptors.request.use(
  (config) => {
    // Use own logic to retrieve the token
    // const token = localStorage.getItem('token')
    // config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { ProtectedHttpClient, PublicHttpClient };
