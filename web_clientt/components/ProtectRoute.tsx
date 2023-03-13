import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();
  let username: string | null | undefined = undefined;
  if (typeof window !== "undefined") {
    username = localStorage.getItem("username");
  }

  // useLayoutEffect(() => {
  //   if (username) router.push("concept1");
  //   else router.push("/login");
  // });

  // console.log(`tokn is this: ${token?.slice(0, 9)}`);

  // useLayoutEffect(() => {
  // if (token) router.push("/test0");
  // else router.push("/login");
  // }, []);

  return children;
};
