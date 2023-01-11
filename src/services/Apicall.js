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
  return await axios.post(
    `https://geeksdent-backend-production.up.railway.app/login`,
    body
  );
  //return await axios.post(`http://localhost:8000/api/login`, body);
  //      {
  //    "email":"nacho@nacho.es",
  //    "password":"Nacho1234"
  //}
};

export const bringUserInfo = () => {
  return axios.get(
     "https://geeksdent-backend-production.up.railway.app/users/id/" 
      //email
    //"localhost:8000/api/profile"
  );
};

//export const profileUser = async (token) => {
//  var config = {
//    headers: {
//      Authorization: "Bearer " + token
//    }
//  };
//  return await axios.get(`http://localhost:8000/api/profile`, config);
//};

export const registerUser = async (body) => {
  return axios.post(
    //"http://localhost:8000/api/register",
    "https://geeksdent-backend-production.up.railway.app/api/register",
    body
    // {

    //            "name":"Ignacio",
    //            "surname":"García Valero",
    //             "email":"naxete7@hotmail.es",
    //            "password":"nacho1234",
    //            "phone":"633867214",
    //         

    //}
  );
};


export const bringUserAppointments = () => {
  //return axios.get(`https://localhost:8000/api/myAppointments`);
  return axios.get(
    `https://geeksdent-backend-production.up.railway.app/api/myAppointments/`
  );
};

export const addAppointments = (body) => {
  //return axios.post(`https://localhost:8000/api/addAppointment`,
     return axios.post(
       `https://geeksdent-backend-production.up.railway.app/api/addAppointment`,
       body

       // {"date":"2023-1-26",
       //"duration":"1 hora",
       //"reason":"Colocacion de brackets",
       //"doctorsId":"2",
       //"treatmentsId":"6"}
       //}
     );
};

export const getAllAppointments = () => {
  return axios.get(
    `https://geeksdent-backend-production.up.railway.app/appointments`
  );
  //return axios.get(`https://localhost:8000/api/appointments`);
};


export const getAllUsers = () => {
  return axios.get(`https://geeksdent-backend-production.up.railway.app/users`);
  //return axios.get(`https://localhost:8000/api/users`);
};


export const logout = () => {
   return axios.post(
     `https://geeksdent-backend-production.up.railway.app/logout`
   );
  //return axios.post(`localhost:8000/api/logout`);
}


export const updateUser = () => {
  
  //return axios.put(`localhost:8000/api/updateUser`);
   return axios.put(
     `https://geeksdent-backend-production.up.railway.app/api/updateUser`
   );
}

export const deleteUser = () => {
  
  //return axios.delete(`localhost:8000/api/deleteuser/{id}`);
  return axios.delete(
    `https://geeksdent-backend-production.up.railway.app/api/deleteuser/{id}`
  );
}


