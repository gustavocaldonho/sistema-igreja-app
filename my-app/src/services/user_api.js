import api from "./api";

export const signupUser = async (data) => {
  try {
    const response = await api.post(
      "/signup",
      {
        birthday: data.birthday,
        community: data.community,
        cpf: data.cpf,
        phone: data.phone,
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
  try {
    const response = await api.put(
      "/me",
      {
        cpf: data.cpf,
        phone: data.phone,
        name: data.name,
        community_patron: data.community,
        password: data.password,
        birthday: data.birthday,
        // image: "",
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

export const getUsersCommunity = async (patron, token) => {
  try {
    const response = await api.get(`/community/${patron}/users`, {
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

export const getUserByCpf = async (cpf, token) => {
  try {
    const response = await api.get(`/users/${cpf}`, {
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

export const getCouncils = async (community, token) => {
  try {
    const response = await api.get(`/community/${community}/councils`, {
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

export const upgradeUser = async (data, token) => {
  try {
    const response = await api.patch(
      "/user/upgrade/position_and_responsability",
      {
        cpf: data.cpf,
        position: data.position,
        responsibility: data.responsibility,
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

export const setImageUser = async (formData, token, cpf) => {
  try {
    const response = await api.patch(`/image/user/${cpf}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getImageUser = async (token, cpf) => {
  try {
    const response = await api.get(`image/user/${cpf}`, {
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

export const deleteImageUser = async (token, cpf) => {
  try {
    const response = await api.delete(`image/user/${cpf}`, {
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

// temporário
export const getUsersTemp = async (token) => {
  try {
    const response = await api.get(`/users/all`, {
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

export const getCodeSms = async (cpf) => {
  try {
    const response = await api.get(`password_recovery/${cpf}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getNewPassword = async (cpf, codeSms) => {
  try {
    const response = await api.get(`password_recovery/${cpf}/${codeSms}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
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
