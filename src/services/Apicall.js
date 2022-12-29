import axios from "axios";

export const loginUser = async (body, res) => {
  try {
    let resp = await axios.post(
      "https://geeksdent-backend-production.up.railway.app//auth/login",
      body
    );

    if (resp.data === "Password or email is incorrect") {
      return "El email o la contraseña son incorrectos";
    } else if (resp.data.message === "Login successful") {
      return resp;
    }
  } catch (error) {
    return error.response;
  }
};

export const registerUser = async (body) => {
  return axios.post(
    "https://geeksdent-backend-production.up.railway.app//auth/register",
    body
    // {
    //     "email": 'elbanking@punsdhi.com',
    //     "password": 'gsdfg34563SFGSF'
    //   }
  );
};

export const bringUserInfo = (email) => {
  return axios.get(
    "https://geeksdent-backend-production.up.railway.app//users/id/" + email
  );
};

export const bringUserAppointments = (email) => {
  return axios.get(
    `https://geeksdent-backend-production.up.railway.app//appointments/${email}`
  );
};


export const bringAllAppointments = () => {
  return axios.get(
    `https://geeksdent-backend-production.up.railway.app//appointments/`
  );
};


export const bringAllUsers = () => {
  return axios.get(
    `https://geeksdent-backend-production.up.railway.app//users/`
  );
};




