import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://managed-api-for-kids.herokuapp.com",
      // baseURL: 'http://localhost:5001'
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

  // receive an user as an object
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

  // receive an user as an object
  signup = async (user) => {
    try {
      const { data } = await this.api.post("/auth/signup", user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  // receive a child as an object
  addChild = async (child) => {
    try {
      const { data } = await this.api.post("/children", child);
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  getChildren = async () => {
    try {
      const { data } = await this.api.get("/children");
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  getChild = async (id) => {
    try {
      const { data } = await this.api.get(`/children/${id}`);
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  updateChild = async (id, child) => {
    try {
      await this.api.put(`/children/${id}`, child);
    } catch (error) {
      throw error.response;
    }
  };

  deleteChild = async (id) => {
    try {
      await this.api.delete(`/children/${id}`);
    } catch (error) {
      throw error.response;
    }
  };

  // receive a room as an object
  addRoom = async (room) => {
    try {
      const { data } = await this.api.post("/rooms", room);
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  getRooms = async () => {
    try {
      const { data } = await this.api.get("/rooms");
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  updateRoom = async (id, room) => {
    try {
      await this.api.put(`/rooms/${id}`, room);
    } catch (error) {
      throw error.response;
    }
  };

  deleteRoom = async (id) => {
    try {
      await this.api.delete(`/rooms/${id}`);
    } catch (error) {
      throw error.response;
    }
  };

  childCheckInCheckOut = async (roomId, childId) => {
    try {
      const { data } = await this.api.put(`/checkin/${childId}/${roomId}`);
      return data;
    } catch (error) {
      throw error.response;
    }
  };
}

export default new Api();
