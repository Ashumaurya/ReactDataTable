const handleonChange = (name) => (event) => {
  settempUser({ ...tempUser, [name]: event.target.value });
};

export default addUser = (e) => {
  axios
    .post("https://jsonplaceholder.typicode.com/users", tempUser)
    .then((data) => {
      alert("Hey a user has been added check console by pressing F12");
      settempUser({
        ...tempUser,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
      console.log(data);
      const newData = data.data;
      setUserDetails([...userDetails, newData]);
    })
    .catch((err) => {
      console.log(err);
    });
};
