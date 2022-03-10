import { Box, Typography } from "@mui/material";
import Head from "next/head";
import MarketplaceLayout from "../components/market/MarketplaceLayout";
import SearchNfts from "../components/market/SearchNfts";
import TopNfts from "../components/market/TopNfts";
import TrendingNfts from "../components/market/TrendingNfts";
import NewNfts from "../components/market/NewNfts";

const Market = () => {
  return (
    <>
      <Head>
        <title>TronTown || Marketplace</title>
      </Head>
      <Box className="pb-20 px-6 pt-6 w-full text-white overflow-x-hidden sm:px-10 sm:pt-10">
        <Box maxWidth={500} className="mx-auto xl:mx-0">
          <SearchNfts />
        </Box>
        <Box className="flex flex-col mt-14 gap-x-20 gap-y-14 xl:flex-row">
          <Box className="shrink-0">
            <Typography
              component="h1"
              className="uppercase font-black text-center mb-3"
              fontSize="clamp(1.5rem, 5vw, 3rem)"
            >
              New NFT&apos;s
            </Typography>
            <NewNfts />
          </Box>
          <Box className="min-w-0">
            <TrendingNfts />
            <TopNfts />
          </Box>
        </Box>
      </Box>
    </>
  );
};

Market.getLayout = function getLayout(page) {
  return <MarketplaceLayout>{page}</MarketplaceLayout>;
};

export default Market;
