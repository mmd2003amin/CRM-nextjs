import { useRouter } from "next/router";

const changeStyle = (fa, en) => {
  const locale = useRouter().locale;
  return locale === "fa" ? fa : en;
};

export default changeStyle;
