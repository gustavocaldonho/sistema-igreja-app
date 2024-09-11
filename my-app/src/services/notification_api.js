import api from "./api";

export const sendApiExpoToken = async (fcmToken, tokenUser) => {
  try {
    console.log("pegou");
    console.log("pegou: ", fcmToken);
    console.log("pegou: ", tokenUser);
    const response = await api.post(
      "/web_push/subscription",
      {
        token: fcmToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenUser,
        },
      }
    );
    console.log(response);
    console.log("PASSOU");

    return response;
  } catch (error) {
    return error;
  }
};
