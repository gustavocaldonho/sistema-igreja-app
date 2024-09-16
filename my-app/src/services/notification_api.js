import api from "./api";

export const sendApiFCMToken = async (fcmToken, tokenUser) => {
  try {
    console.log("pegou fcm: ", fcmToken);
    console.log("pegou user: ", tokenUser);
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
