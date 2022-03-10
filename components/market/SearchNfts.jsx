import { Box } from "@mui/system";

const SearchNfts = () => {
  return (
    <Box className="relative w-full">
      <Box
        component="input"
        placeholder="Search NFTs ..."
        className="outline-none pl-12 rounded-full py-4 font-semibold text-xl leading-none w-full"
        color="#fff"
        bgcolor="primary.main"
        sx={{
          boxShadow: "0 9px 6px rgba(0,0,0,0.57)",
          "::placeholder": {
            color: "#fff",
            fontStyle: "italic",
          },
        }}
      />
      <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-lg text-white">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
    </Box>
  );
};

export default SearchNfts;
