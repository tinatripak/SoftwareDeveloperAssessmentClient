import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6000/services",
});

export const getStylistServices = async () => {
  try {
    const response = await api.get("/getStylistServices");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStylistServiceById = async (id) => {
  try {
    const response = await api.get(`/getStylistServiceById/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStylistService = async (serviceData) => {
  try {
    const response = await api.post("/createStylistService", serviceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
