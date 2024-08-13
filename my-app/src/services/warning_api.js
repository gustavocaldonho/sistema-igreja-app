import api from "./api";

export const getTenWarnings = async (token) => {
  try {
    const response = await api.get("/community/warnings", {
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

export const createWarning = async (data, token) => {
  try {
    const response = await api.post(
      "/community/warnings",
      {
        title: data.title,
        description: data.description,
        scope: data.scope,
        // image: data.image,
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

export const updateWarning = async (data, token) => {
  try {
    const response = await api.put(
      `/community/warnings/${data.id}`,
      {
        title: data.title,
        description: data.description,
        scope: data.scope,
        // image: data.image,
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

export const deleteWarning = async (id, token) => {
  try {
    const response = await api.delete(`/community/warnings/${id}`, {
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
