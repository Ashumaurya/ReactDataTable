import { useState } from "react";
import { createContext } from "react";
export const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
  const [userDetail, setUserDetail] = useState(["this is context api"]);

  return (
    <UserDataContext.Provider value={[userDetail, setUserDetail]}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
