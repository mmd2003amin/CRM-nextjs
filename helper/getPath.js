import { useRouter } from "next/router";

const GetPath = () => {
  const routes = useRouter();
  return routes.route.split("/").slice(-1);
};

export default GetPath;
