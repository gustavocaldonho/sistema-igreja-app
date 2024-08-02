import api from "./api";

export const login_user = (data) => {
  api
    .post(
      "/signin",
      {
        cpf: data.cpf,
        password: data.password,
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

export const logout_user = () => {
  // destruir o token de acesso;
};

export const getUsers = (data) => {
  api
    .get(
      "/endpoint",
      {
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

export const cadastryUser = (data) => {
  api
    .post(
      "/endpoint",
      {
        cpf: data.cpf,
        name: data.name,
        email: data.email,
        birthday: data.birthday,
        community: data.community,
        password: data.password,
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

export const updateUser = (data) => {
  api
    .post(
      "/endpoint",
      {
        cpf: data.cpf,
        name: data.name,
        email: data.email,
        birthday: data.birthday,
        id_community: data.id_community,
        password: data.password,
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

export const disableUser = (data) => {
  api
    .post(
      "/endpoint",
      {
        cpf: data.cpf,
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

// Authorization: `Bearer ${token}`,

// const user_api = async (data) => {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         cpf: data.cpf,
//         password: data.password,
//       }),
//     });

//     const responseData = await response.json();
//     console.log("Response received:", responseData);
//   } catch (error) {
//     console.log(error);
//   }
// };
