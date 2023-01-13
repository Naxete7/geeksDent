import axios from "axios";


export const loginUser = async (body) => {
  return await axios.post(
    `http://localhost:8000/api/login`,
    body
  );
  //return await axios.post(
  //  `https://geeksdent-backend-production.up.railway.app/api/login`,
  //  body
  //);
  //      {
  //    "email":"nacho@nacho.es",
  //    "password":"Nacho1234"
  //}
};


export const profile = async (token) => {
  var config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  return await axios.get(`http://localhost:8000/api/profile`, config);
  // return await axios.get(
  //   `https://geeksdent-backend-production.up.railway.app/api/profile`,
  //   config
  // );
};

export const registerUser = async (body) => {
  return axios.post(
    "http://localhost:8000/api/register",
    //"https://geeksdent-backend-production.up.railway.app/api/register",
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


export const myAppointments = async (token) => {
  var config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  return axios.get(`http://localhost:8000/api/myAppointments`,config);
  //return axios.get(
  //  `https://geeksdent-backend-production.up.railway.app/api/myAppointments/`,config
  //);
};

export const addAppointments = (body, token) => {
var config = {
  headers: {
    Authorization: "Bearer " + token
  }
};
  
  return axios.post(`http://localhost:8000/api/addAppointment`,
    // return axios.post(
    //   `https://geeksdent-backend-production.up.railway.app/api/addAppointment`,
       body,config

       // {"date":"2023-1-26",
       //"duration":"1 hora",
       //"reason":"Colocacion de brackets",
       //"doctorsId":"2",
       //"treatmentsId":"6"}
       //}
     );
};

export const getAllAppointments = (token) => {
  var config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  //return axios.get(
  //  `https://geeksdent-backend-production.up.railway.app/api/appointments`, config
  //);
  return axios.get(`http://localhost:8000/api/appointments`,config);
};


export const getAllUsers = (token) => {
  var config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  //return axios.get(`https://geeksdent-backend-production.up.railway.app/api/users`,config);
  return axios.get(`http://localhost:8000/api/users`,config);
};


export const logout = () => {
  // return axios.post(
  //   `https://geeksdent-backend-production.up.railway.app/api/logout`
  // );
  return axios.post(`http://localhost:8000/api/logout`);
}


export const updateUser = (token, body) => {
  var config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  return axios.put(`http://localhost:8000/api/updateUser`, body, config);
  // return axios.put(
  //   `https://geeksdent-backend-production.up.railway.app/api/updateUser`,,body,config
  // );
}

export const deleteUser = () => {
  
  return axios.delete(`localhost:8000/api/deleteuser/{id}`);
  //return axios.delete(
  //  `https://geeksdent-backend-production.up.railway.app/api/deleteuser/{id}`
  //);
}


export const doctors = () => {
  return axios.get(`http://localhost:8000/api/doctors`);
  //return axios.get(`https://geeksdent-backend-production.up.railway.app/api/doctors`)
}

export const treatments = () => {
  return axios.get(`http://localhost:8000/api/treatments`);
  //return axios.get(`https://geeksdent-backend-production.up.railway.app/api/treatments`)
}

