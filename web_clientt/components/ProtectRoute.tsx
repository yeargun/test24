import { useRouter } from "next/router";
import { useEffect } from "react";
import useIsUnauthorized from "./useIsUnauthorized";

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();
  const isUnauthorized = useIsUnauthorized();
  // server side nextjs stuff makes more sense but it is what it is

  console.log("unauth protect:", isUnauthorized);
  useEffect(() => {
    if (router && isUnauthorized) {
      if (router.pathname !== "/login" && router.pathname !== "/register")
        router.push("/login");
    }
  }, [isUnauthorized, router]);

  return children;
};
