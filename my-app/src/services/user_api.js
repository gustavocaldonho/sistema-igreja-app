import api from "./api";

export const signupUser = async (data) => {
  try {
    const response = await api.post(
      "/signup",
      {
        birthday: data.birthday,
        community: data.community,
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        password: data.password,
        // active: data.active,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const signinUser = async (data) => {
  try {
    const response = await api.post(
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
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getMe = async (token) => {
  try {
    const response = await api.get("/me", {
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

export const updateUser = async (data, token) => {
  console.log("data: ", data);

  try {
    const response = await api.put(
      "/me",
      {
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        community_patron: data.community,
        password: data.password,
        birthday: data.birthday,
        image: "",
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
