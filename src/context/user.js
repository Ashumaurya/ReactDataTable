import axios from "axios";

const { useState, useEffect } = require("react");

const UserContext = () => {
  const [userDetails, setUserDetails] = useState({
    users: [],
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        setUserDetails({ users: users.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleonClick = () => {
    console.log(userDetails);
  };
  const handleonAddUsers = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        id: 123,
        name: "React",
        username: "ReactToDo",
        email: "wasup@gmail.com",
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleonClick}>click Me</button>
      <button onClick={handleonAddUsers}>Add users</button>
    </div>
  );
};

export default UserContext;
