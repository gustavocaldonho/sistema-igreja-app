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

export const getCommunitiesWithToken = (data) => {
  api
    .get(
      "/endpoint",
      {
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

export const cadastryCommunity = (data) => {
  api
    .post(
      "/endpoint",
      {
        patron: data.patron,
        location: data.location,
        token: data.token,
        active: data.active,
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

export const updateCommunity = (data) => {
  api
    .post(
      "/endpoint",
      {
        id_community: data.id_community,
        patron: data.patron,
        location: data.location,
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
