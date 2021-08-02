// import axios from "axios";
const axios = require("axios");

const getUsers = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};

export default getUsers;
