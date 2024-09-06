import api from "./api";

export const sendExpoToken = async (expoToken, token) => {
  try {
    const response = await api.post(
      "/web_push/subscription",
      {
        expoToken: expoToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
