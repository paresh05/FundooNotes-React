import axiosPost from "../helper/axios";

const getNotes = () => {
  let reqObj = {
    headers: {
      Authorization: localStorage.getItem("token"),
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

const postNotes = (data) => {
  let reqObj = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    url: "https://fundoonotesbe.herokuapp.com/notes",
    data: data,
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

const deleteNotes = (data) => {
  let reqObj = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    url: "https://fundoonotesbe.herokuapp.com/notes/" + data._id,
    data: data,
  };
  return axiosPost
    .apiDelete(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const updateNotes= (data) => {
  let reqObj = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    url: "https://fundoonotesbe.herokuapp.com/notes/"+data._id,
    data: data,
  };
  return axiosPost
    .apiUpdate(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const postImage= (data) => {
  let reqObj = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    url: "https://fundoonotesbe.herokuapp.com/upload-image",
    data: data,
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

export default { getNotes, postNotes, deleteNotes, updateNotes, postImage};