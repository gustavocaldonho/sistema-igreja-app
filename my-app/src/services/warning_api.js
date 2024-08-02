import api from "./api";

export const getWarnings = (data) => {
  api
    .get(
      "/endpoint",
      {
        // lembrar de pegar os avisos 'public: true', isto é, os públicos;
        id_community: data.id_community,
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

export const cadastryWarning = (data) => {
  api
    .post(
      "/endpoint",
      {
        title: data.title,
        message: data.message,
        id_community: data.id_community,
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

export const updateWarning = (data) => {
  api
    .post(
      "/endpoint",
      {
        id_warning: data.id_warning,
        title: data.title,
        message: data.message,
        id_community: data.id_community,
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

export const deleteWarning = (data) => {
  api
    .post(
      "/endpoint",
      {
        id_warning: data.id_warning,
        id_community: data.id_community,
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
