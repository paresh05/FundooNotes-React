import axiosPost from "../helper/axios";

const register = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:3001/users",
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const login = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:3001/users/login",
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const forgotPassword = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:3001/users/login/forgotPassword",
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const resetPassword = (data,token) => {
  let reqObj = {
    data: data,
    url: "http://localhost:3001/users/login/reset/"+token,
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getNotes= () => {
  let reqObj = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    url: "http://localhost:3001/notes",
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
export default { register, login, forgotPassword, resetPassword, getNotes};
