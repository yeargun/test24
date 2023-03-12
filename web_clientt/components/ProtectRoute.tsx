import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "features/auth/authSlice";
import { useLayoutEffect } from "react";

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();
  const token = useSelector(selectCurrentToken);

  console.log(`tokn is this: ${token?.slice(0, 9)}`);

  // useLayoutEffect(() => {
  // if (token) router.push("/test0");
  // else router.push("/login");
  // }, []);

  return children;
};
