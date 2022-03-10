import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AboutContent from "./AboutContent";
import HomeContent from "./HomeContent";

const Children = () => {
  const { asPath } = useRouter();
  const [hash, setHash] = useState();

  useEffect(() => {
    setHash(asPath.substring(asPath.indexOf("#") + 1));
  }, [asPath]);

  if (hash === "about") return <AboutContent />;
  return <HomeContent />;
};

const Content = () => {
  return (
    <Box className="container mx-auto">
      <Children />
    </Box>
  );
};

export default Content;
