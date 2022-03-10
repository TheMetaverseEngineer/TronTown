import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import CustomAlert from "../components/market/CustomAlert";
import MarketplaceLayout from "../components/market/MarketplaceLayout";
import contractInfo from "../contract/test.json";
// import { useTronWeb } from "../components/providers/TronWebProvider";

const SurpriseEgg = () => {
  // const { contract, tw } = useTronWeb();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleMint = async () => {
    try {
      if (!window?.tronWeb) {
        setShowAlert(true);
        setAlertMessage(
          "You must install TronLink or unlock your TronLink wallet"
        );
        return;
      }

      if (!window?.tronLink?.ready) {
        setShowAlert(true);
        setAlertMessage("Please connect your wallet");
        return;
      }

      const contract = await window.tronWeb.contract().at(contractInfo.address);

      const res = await contract.mintNFT(1).send();

      // tw.setAddress(window.tronWeb.defaultAddress.base58);

      // const res = await contract.mintNFT(1).send();
    } catch (e) {
      setShowAlert(true);
      setAlertMessage(e.message);
    }
  };

  return (
    <>
      <Head>
        <title>TronTown || Surprise Egg</title>
      </Head>
      <Box className="pb-20 px-6 pt-6 w-full text-white overflow-x-hidden sm:px-10 sm:pt-10">
        <Box
          sx={{
            background: "url('/assets/images/rooster-desktop.png')",
            minHeight: 400,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            px: 1.5,
            py: 6,
          }}
        />
        <Box className="">
          <Box
            className="bg-transparent backdrop-blur-xl backdrop-brightness-75 w-full p-5 pt-16 relative mt-20 mx-auto"
            maxWidth={700}
            borderRadius={5}
          >
            <Typography
              component="h1"
              fontSize="clamp(1.2rem, 5vw, 2rem)"
              className="font-black text-center mb-2"
            >
              Tron Surprise Egg
            </Typography>
            <Typography className="text-center">
              The Only Tron Surprise Egg Gives you chance to win 1000$ in TRX
            </Typography>
            <Avatar
              sx={{ width: 120, height: 120 }}
              src="/assets/images/chicken.gif"
              alt="Chicken"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Box>
          <Card
            className="bg-transparent relative overflow-visible mt-14 xl:flex xl:gap-x-10 xl:items-center justify-center mx-auto max-w-screen-xl"
            elevation={0}
            sx={{ maxWidth: { md: 600, xl: "100%" } }}
          >
            <CardMedia className="relative xl:order-2">
              <Box
                component="img"
                src="/assets/images/tron-egg.png"
                className="rounded-3xl w-full mx-auto"
                // maxWidth={{ xxs: "60%", xl: 300 }}
              />
            </CardMedia>
            <CardContent className="w-full" sx={{ maxWidth: { xl: 600 } }}>
              <Box className="flex justify-between items-center gap-x-5 mb-1 flex-wrap">
                <Box className="uppercase">
                  <Typography
                    color="primary"
                    fontSize="clamp(1.5rem, 5vw, 3rem)"
                    className="font-black"
                  >
                    Tron Surprise Egg
                  </Typography>
                  {/* <Typography
                    color="primary"
                    className="font-bold"
                    fontSize="clamp(1rem, 2vw, 2rem)"
                  >
                    Lorem ipsum dolor sit amet
                  </Typography> */}
                </Box>
              </Box>
              <Typography
                className="text-white"
                fontSize="clamp(1rem, 2vw, 1.2rem)"
              >
                - Chance To Win 1000$
                <br /> - Get Access To Free AirDrop For Tron Town Metaverse And
                Chicken NFTs
                <br /> - Win Chicken , Rooster NFT and Get Whitelisted
                <br /> - Sell Your NFT in Market Buy Now , Only 1$
              </Typography>
              <Box className="flex justify-between flex-wrap gap-x-5 gap-y-2 mt-3">
                <Box
                  className="uppercase font-black text-white flex items-center gap-x-3"
                  fontSize="clamp(1.3rem, 3vw, 2rem)"
                >
                  <Box
                    bgcolor="#3A33CE"
                    className="text-white w-10 h-10 inline-flex items-center justify-center rounded-full"
                  >
                    <Avatar src="/assets/icons/trx.png" alt="TRX" />
                  </Box>{" "}
                  1 $
                </Box>
                <Button className="bg-white px-5 xs:px-10">Mint</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <CustomAlert
        message={alertMessage}
        setShowAlert={setShowAlert}
        showAlert={showAlert}
        variant="filled"
      />
    </>
  );
};

SurpriseEgg.getLayout = function getLayout(page) {
  return <MarketplaceLayout>{page}</MarketplaceLayout>;
};

export default SurpriseEgg;
