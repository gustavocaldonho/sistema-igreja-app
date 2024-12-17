import api from "./api";

export const addBalanceApi = async (data, patron, token) => {
  try {
    const response = await api.post(
      `/community/${patron}/finance`,
      {
        title: data.title,
        description: data.description,
        value: data.value,
        type: data.type,
        date: data.date,
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

export const getBalancesMonthApi = async (patron, year, month, token) => {
  try {
    const response = await api.get(
      `/community/${patron}/finance/${year}/${month}`,
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
