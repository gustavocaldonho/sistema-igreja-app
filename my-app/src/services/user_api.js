// import axios from "axios";
import api from "./api";

const user_api = (data) => {
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default user_api;

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
