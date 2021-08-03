import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../../context/userData";
import { TempUserContext } from "../../context/tempData";

export const HandleUpdateUser = (id) => {
  const [tempUser, settempUser, isUpdating, setisUpdating] =
    useContext(TempUserContext);
  const [userDetail, setUserDetail] = useContext(UserDataContext);
  if (id > 10) {
    alert(
      "Please edit User under 10 as JsonPlaceholder Api does not work after userid 10 for more details please read jsonplaceholder Guides"
    );
    return;
  }
  setisUpdating(true);
  let newData = userDetail.filter((data) => data.id !== id);
  let user = userDetail.filter((data) => data.id === id);
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
  setUserDetail(newData);
};

export const UpdateUser = () => {
  const [tempUser, settempUser, isUpdating, setisUpdating] =
    useContext(TempUserContext);
  const [userDetail, setUserDetail] = useContext(UserDataContext);
  console.log("update");
  axios
    .put(`https://jsonplaceholder.typicode.com/users/${tempUser.id}`, tempUser)
    .then((data) => {
      console.log(data);
      const editedData = data.data;
      setUserDetail([...userDetail, editedData]);
      setisUpdating(false);
      alert("Hey a user has been Updated please check Console by pressing F12");
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
