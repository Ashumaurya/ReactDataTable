import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { HandleUpdateUser } from "../controllers/updateUser";
import { makeStyles } from "@material-ui/core/styles";
import { UserDataContext } from "../../context/userData";
import DeleteUser from "../controllers/deleteUser";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddorUpdateUser from "./addOrUpdate";
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
  const [userDetail, setUserDetail] = useContext(UserDataContext);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        setUserDetail(users.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {userDetail.map((user) => {
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
                        DeleteUser(user.id);
                      }}
                    />
                    <EditIcon
                      className={classes.icons}
                      onClick={() => {
                        HandleUpdateUser(user.id);
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
      <AddorUpdateUser />
    </div>
  );
};
export default Datatable;
