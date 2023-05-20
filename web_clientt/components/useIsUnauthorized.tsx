import { useEffect, useState } from "react";
import { cookies } from "../pages/_app";
import { useSelector } from "react-redux";
import { isUnauthorizedState } from "features/auth/authSlice";

const useIsUnauthorized = () => {
  const [isUnauthorized, setIsUnauthorized] = useState<Boolean>();
  const unauthorizedRedux = useSelector(isUnauthorizedState);
  useEffect(() => {
    setIsUnauthorized(unauthorizedRedux || !cookies.get("Authorization"));
  }, [cookies.get("Authorization"), isUnauthorized]);

  return isUnauthorized;
};

export default useIsUnauthorized;
