import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "../../config";

const LandingContent = () => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get(endpoints.pages);

  //     // getting the html content of the page
  //     const {
  //       content: { rendered: homeContent },
  //     } = res.data.find((e) => e.slug === "home");

  //     // make a dom object from html content
  //     const dom = new DOMParser().parseFromString(homeContent, "text/html");

  //     // set extracted dom as data state
  //     setData(dom);
  //   })();
  // }, []);

  return (
    <Box
      className="relative px-5 space-y-3 text-center mt-40 md:mt-80 sm:text-left"
      maxWidth={{ xxs: 500 }}
    >
      <Typography
        component="h1"
        className="uppercase font-black leading-none"
        fontSize="clamp(1.8rem, 5vw, 2.4rem)"
      >
        Tron Town Metaverse
      </Typography>
      <Typography variant="body1">
        is a community-driven platform where creators can monetize ASSETS , Run
        Bussiness On The Metaverse and Gaming experiences such as Racing Car on
        the Tron blockchain
      </Typography>
      <Box className="flex flex-col items-center gap-3">
        {/* <Box
          component="input"
          type="email"
          className="rounded-full bg-landing text-white py-3 px-3 w-full min-w-0 text-lg outline-none md:rounded-xl"
          placeholder="Email address..."
          sx={{
            "&::placeholder": {
              color: "#fff",
            },
          }}
        /> */}
        <Button
          className="text-white bg-landing rounded-full px-10 py-2 md:rounded-xl"
          variant="contained"
          href="https://metaverse247.live:3001/trontown"
        >
          Launch Demo
        </Button>
      </Box>
    </Box>
  );
};

export default LandingContent;
