import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const routes = useRouter();

  useEffect(() => {
    routes.push("/dashboard");
  }, []);
  return <></>;
};

export default index;
