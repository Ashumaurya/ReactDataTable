import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import axios from "axios";
const useStyle = makeStyles({
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "0 2px",
    cursor: "pointer",
  },
  addData: {
    margin: "20px 0px",
  },
  container: {
    margin: "40px",
  },
});

const Datatable = () => {
  const classes = useStyle();

  const [userDetails, setUserDetails] = useState([]);
  const [tempUser, settempUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const [isUpdating, setisUpdating] = useState(false);
  const ScrollBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });

    console.log("Scrolled");
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        setUserDetails(users.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // handle delete
  const handleDelete = (id) => {
    if (id > 10) {
      alert(
        "Please DELETE User under 10 as JsonPlaceholder Api does not work after userid 10 for more details please read jsonplaceholder Guides"
      );
      let newData = userDetails.filter((data) => data.id !== id);
      setUserDetails(newData);
      return;
    }

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => {
        console.log(data);
        let newData = userDetails.filter((data) => data.id !== id);
        setUserDetails(newData);
      })
      .catch((err) => console.log(err));
  };
  //handleUpdate
  const handleUpdate = (id) => {
    if (id > 10) {
      alert(
        "Please UPDATE User under 10 as JsonPlaceholder Api does not work after userid 10 for more details please read jsonplaceholder Guides"
      );
      return;
    }
    ScrollBottom();
    setisUpdating(true);
    let newData = userDetails.filter((data) => data.id !== id);
    let user = userDetails.filter((data) => data.id === id);
    console.log(user[0].id);
    settempUser({
      ...tempUser,
      id: user[0].id,
      name: user[0].name,
      username: user[0].username,
      email: user[0].email,
      phone: user[0].phone,
      website: user[0].website,
    });
    setUserDetails(newData);
  };
  const handleonChange = (name) => (event) => {
    settempUser({ ...tempUser, [name]: event.target.value });
  };
  const UpdateUser = () => {
    console.log("update");
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${tempUser.id}`,
        tempUser
      )
      .then((data) => {
        console.log(data);
        const editedData = data.data;
        setUserDetails([...userDetails, editedData]);
        setisUpdating(false);
        alert(
          "Hey a user has been Updated please check Console by pressing F12"
        );
        settempUser({
          ...tempUser,
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
        });
      })
      .catch((err) => console.log(err));
  };
  const addUser = (e) => {
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
  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} arial-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDetails.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}.</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.website}</TableCell>
                  <TableCell>
                    <DeleteIcon
                      className={classes.icons}
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    />
                    <EditIcon
                      className={classes.icons}
                      onClick={() => {
                        handleUpdate(user.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Users */}
      {isUpdating ? (
        <h1 className={classes.addData}> Update User</h1>
      ) : (
        <h1 className={classes.addData}> Add Users</h1>
      )}
      <TableContainer className={classes.addData}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  id='outlined-basic-1'
                  label='Name'
                  variant='outlined'
                  onChange={handleonChange("name")}
                  value={tempUser.name}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id='outlined-basic-2'
                  label='UserName'
                  variant='outlined'
                  onChange={handleonChange("username")}
                  value={tempUser.username}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id='outlined-basic-3'
                  label='Email'
                  variant='outlined'
                  onChange={handleonChange("email")}
                  value={tempUser.email}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id='outlined-basic-4'
                  label='Phone No.'
                  variant='outlined'
                  onChange={handleonChange("phone")}
                  value={tempUser.phone}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id='outlined-basic-5'
                  label='Website'
                  variant='outlined'
                  onChange={handleonChange("website")}
                  value={tempUser.website}
                />
              </TableCell>
              <TableCell>
                <AddCircleOutlineIcon
                  fontSize='large'
                  className={classes.icons}
                  onClick={isUpdating ? UpdateUser : addUser}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Datatable;
