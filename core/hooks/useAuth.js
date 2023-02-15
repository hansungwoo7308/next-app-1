import { useContext } from "react";

import AuthContext from "../provider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

// custom hook
export default useAuth;
