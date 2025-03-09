import api from "./api";

export const getCodePaymentDizimo = async (data, token) => {
  try {
    const response = await api.post(
      "/dizimo_payment",
      {
        value: data.value,
        month: data.month,
        year: data.year,
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

export const getPaymentsDizimo = async (userCpf, year, token) => {
  try {
    const response = await api.get(`/dizimo_payment/${userCpf}/${year}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
