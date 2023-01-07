import axios from "axios";

//export const loginUser = async (body,resp) => {
//  try {
//    let resp = await axios.post(
//      "http://localhost:8000/api/login",
//      body
//      //      {
//      //    "email":"nacho@nacho.es",
//      //    "password":"Nacho1234"
//      //}
//    );
//    //console.log(resp.data);
   
//    //} else if (resp.data.message === "Login successful") {
//      return resp.data;
    
//  } catch (error) {
//    return error.response;
//  }
//};

export const loginUser = async (body) => {
  return await axios.post(`http://localhost:8000/api/login`, body);
  //      {
  //    "email":"nacho@nacho.es",
  //    "password":"Nacho1234"
  //}
};

export const profileUser = async (token) => {
  var config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  return await axios.get(`http://localhost:8000/api/profile`, config);
};

export const registerUser = async (body) => {
  return axios.post(
    "http://localhost:8000/api/register",
    body
    // {

    //            "name":"Ignacio",
    //            "surname":"García Valero",
    //             "email":"naxete7@hotmail.es",
    //            "password":"nacho1234",
    //            "phone":"633867214",
    //            "birth_date":"1986-09-23"

    //}
  );
};

export const bringUserInfo = (email) => {
  return axios.get(
    "https://geeksdent-backend-production.up.railway.app//users/id/" + email
  );
};

export const bringUserAppointments = (email) => {
  return axios.get(`https://localhost:8000/api/myAppointments/${email}`);
};


export const getAllAppointments = () => {
  return axios.get(`https://localhost:8000/api/appointments`);
};


export const getAllUsers = () => {
  return axios.get(`https://localhost:8000/api/users`);
};


export const logout = () => {
  return axios.post(`localhost:8000/api/logout`);
}



