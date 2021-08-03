import { TableCell } from "@material-ui/core";
import { Table, TableHead, TableRow } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
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
const AddorUpdateUser = () => {
  const classes = useStyle();
  return (
    <div>
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

export default AddorUpdateUser;
