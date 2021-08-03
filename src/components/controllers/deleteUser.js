import { useContext } from "react";
import { UserDataContext } from "../../context/userData";
const DeleteUser = (id) => {
  const [userDetail, setUserDetail] = useContext(UserDataContext);
  let newData = userDetail.filter((data) => data.id !== id);
  setUserDetail(newData);
};

export default DeleteUser;
