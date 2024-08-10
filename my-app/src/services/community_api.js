import api from "./api";

export const getCommunitiesWithoutToken = async () => {
  try {
    const response = await api.get("/patrons", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const cadastryCommunity = async (data, token) => {
  try {
    const response = await api.post(
      "/community",
      {
        patron: data.patron,
        location: data.location,
        email: data.email,
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

export const getCommunitiesWithToken = async (token) => {
  try {
    const response = await api.get("/community/list", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDatasCommunity = async (patron, token) => {
  try {
    const response = await api.get(`/community/${patron}`, {
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

export const updateCommunity = async (patronUpdate, data, token) => {
  try {
    const response = await api.put(
      `/community/${patronUpdate}`,
      {
        patron: data.patron,
        location: data.location,
        email: data.email,
        // image: data.image
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

export const disableCommunity = (data) => {
  api
    .post(
      "/endpoint",
      {
        id_community: data.id_community,
        active: data.active,
        token: data.token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
