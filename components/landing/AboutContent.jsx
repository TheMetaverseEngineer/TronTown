import { Box, Link, Typography } from "@mui/material";

const AboutContent = () => {
  return (
    <Box className="relative px-5 space-y-3 text-center mt-40 md:mt-80 sm:text-left">
      <Typography
        component="h1"
        fontSize="clamp(1.4rem, 4vw, 2.5rem)"
        className="font-black leading-tight"
      >
        This is a metaverse made by
      </Typography>
      <Link
        fontSize="clamp(1.3rem, 4vw, 2.5rem)"
        className="font-semibold"
        href="http://themetaverse.engineer"
      >
        TheMetaverse.engineer
      </Link>
    </Box>
  );
};

export default AboutContent;
