import { useState } from "react";
import { createContext } from "react";

export const TempUserContext = createContext();

const TempUserContextProvider = (props) => {
  const [tempUser, settempUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const [isUpdating, setisUpdating] = useState(false);

  return (
    <TempUserContext.Provider
      value={[tempUser, settempUser, isUpdating, setisUpdating]}
    >
      {props.children}
    </TempUserContext.Provider>
  );
};

export default TempUserContextProvider;
