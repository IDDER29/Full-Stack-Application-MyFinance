import api from "./api";

export const fetchProfileData = async () => {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error;
  }
};

export const fetchTransactionsData = async () => {
  try {
    const response = await api.get("/transaction");
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions data:", error);
    throw error;
  }
};
