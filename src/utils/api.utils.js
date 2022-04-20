import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      // baseURL: "https://managed-api-for-kids.herokuapp.com",
      baseURL: 'http://localhost:5001'
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => {
        console.log(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        throw error;
      }
    );
  }

  login = async (user) => {
    try {
      const { data } = await this.api.post("/auth/login", user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      throw error.response;
    }
  };


  signup = async (user) => {
    try {
      const { data } = await this.api.post('/auth/signup', user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      throw error.response;
    }
  }


}


export default new Api();
