import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { isUnauthorized } from "features/auth/authSlice";
import { cookies } from "../pages/_app";

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();
  let username: string | null | undefined = undefined;
  if (typeof window !== "undefined") {
    username = localStorage.getItem("username");
  }
  const unauthorized = useSelector(isUnauthorized);

  console.log("unauth protect:", unauthorized);
  useEffect(() => {
    if (router) {
      if (!cookies.get("Authorization") || unauthorized) {
        console.log("pathname this", router.pathname);
        if (router.pathname !== "/login" && router.pathname !== "/register")
          router.push("/login");
      }
    }
  }, [unauthorized, router]);
  // console.log(`tokn is this: ${token?.slice(0, 9)}`);

  return children;
};
