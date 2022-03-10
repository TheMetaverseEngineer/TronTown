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

const TronLand = () => {
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
        <title>TronTown || Tron Town Land</title>
      </Head>
      <Box className="pb-20 px-6 pt-6 w-full text-white overflow-x-hidden sm:px-10 sm:pt-10">
        <Box
          sx={{
            background: "url('/assets/images/land-2.jpeg')",
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
        <Box>
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
              Tron Town Land
            </Typography>
            <Typography className="text-center">
              Get whitelisted for upcomming NFT Land in Tron Town Metaverse
            </Typography>
            <Avatar
              sx={{ width: 120, height: 120 }}
              src="/assets/images/land.jpeg"
              alt="Chicken"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Box>
          <Card
            className="bg-transparent relative overflow-visible mt-14 xl:flex xl:gap-x-10 xl:items-center justify-center mx-auto max-w-screen-xl"
            elevation={0}
            sx={{ maxWidth: { md: 600, xl: "100%" } }}
          >
            <CardMedia className="relative xl:order-2 xl:flex-grow">
              <Box
                component="img"
                src="/assets/images/land.jpeg"
                className="rounded-3xl w-full mx-auto"
                maxWidth={{ xxs: "60%", xl: 550 }}
              />
            </CardMedia>
            <CardContent className="pt-8" sx={{ maxWidth: { xl: 600 } }}>
              <Box className="flex justify-between items-center gap-x-5 mb-1 flex-wrap">
                <Box className="uppercase">
                  <Typography
                    color="primary"
                    fontSize="clamp(1.5rem, 5vw, 3rem)"
                    className="font-black"
                  >
                    Tron Town Land
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
                - Easy To Cut your expenses with Fast And Easy NFT Generator
                <br /> - Get Access To Private Community
                <br /> - Free Updates For Membership
                <br /> - Unlimited Access For Gold Membership
                <br /> Upcomming Updates :<br /> - Bulk Upload ON BTFS
                <br /> - More Compatible Blockchain
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
                  500 $
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

TronLand.getLayout = function getLayout(page) {
  return <MarketplaceLayout>{page}</MarketplaceLayout>;
};

export default TronLand;
