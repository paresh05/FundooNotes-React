import axiosPost from "../helper/axios";

const register = (data) => {
  let reqObj = {
    data: data,
    url: "https://fundoonotesbe.herokuapp.com/users",
    headers: {
      "Content-type": "application/json",
    },
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
    url: "https://fundoonotesbe.herokuapp.com/users/login",
    headers: {
      "Content-type": "application/json",
    },
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
    url: "https://fundoonotesbe.herokuapp.com/users/login/forgotPassword",
    headers: {
      "Content-type": "application/json",
    },
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
    url: "https://fundoonotesbe.herokuapp.com/users/login/reset/"+token,
    headers: {
      "Content-type": "application/json",
    },
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
      headers: {
        "Content-type": "application/json",
      },
    },
    url: "https://fundoonotesbe.herokuapp.com/notes",
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
