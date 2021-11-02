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
export default { register, login };
