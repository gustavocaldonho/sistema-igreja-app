import api from "./api";

export const getCleaningItems = async (month, year, token) => {
  try {
    const response = await api.get(`/clean/${month}/${year}/`, {
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

export const updateCleaningItem = async (id, payed, token) => {
  try {
    let newPayed = payed ? 1 : 0;
    const response = await api.put(`/clean/${id}/${newPayed}/`, {
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

export const getTenCleaningItems = async (community, token, page, month) => {
  const pageSize = 20;

  const fakeData = Array.from({ length: pageSize }, (_, index) => ({
    id: (page - 1) * pageSize + index + 1,
    name: `Pessoa ${index + 1}`,
    isPaid: Math.random() < 0.5, // Random true or false
    month: "january",
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: fakeData,
        currentPage: page,
        totalPages: 5, // Supondo 5 páginas no total
      });
    }, 1000); // 1 segundo de delay
  });
};
