import { Avatar, Box, Link, Typography } from "@mui/material";
// import Link as RouterLink from "next/link";

const SlideShowSibling = () => {
  return (
    <Box className="mt-5">
      <Box className="flex justify-between items-center gap-x-5 mb-4">
        <Typography fontSize="clamp(1.1rem, 3vw, 1.5rem)" className="font-bold">
          Lorem ipsum
        </Typography>
        <Link color="#fff" href="#" underline="hover" className="text-xs">
          see more
        </Link>
      </Box>
      <Box className="space-y-3">
        {Array.from(new Array(3)).map((_, i) => (
          <Box
            key={i}
            bgcolor="rgba(255,255,255,0.13)"
            className="flex flex-col gap-y-3 gap-x-5 items-center px-4 py-3 text-center xs:flex-row xs:text-left"
            borderRadius={5}
          >
            <Avatar
              src="/assets/images/statue.png"
              sx={{ width: 89, height: 89 }}
            />
            <Box>
              <Typography>Lorem ipsum dolor sit amet</Typography>
              <Typography>Lorem ipsum dolor sit amet</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SlideShowSibling;
