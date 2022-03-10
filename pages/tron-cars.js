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
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomAlert from "../components/market/CustomAlert";
import MarketplaceLayout from "../components/market/MarketplaceLayout";

const TronCars = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <>
      <Head>
        <title>TronTown || Tron NFT Car</title>
      </Head>
      <Box className="pb-20 px-6 pt-6 w-full text-white overflow-x-hidden sm:px-10 sm:pt-10">
        <Box
          sx={{
            background: "url('/assets/images/cars2.jpeg')",
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
              Tron Cars
            </Typography>
            <Typography className="text-center">
              10,000 unique Tron NFT car collection for Tron Town Metaverse,
              Start race with your car
            </Typography>
            <Avatar
              sx={{ width: 120, height: 120 }}
              src="/assets/images/cars3.jpeg"
              alt="Chicken"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Box>
          <Card
            className="bg-transparent relative overflow-visible mt-14 xl:flex xl:gap-x-10 xl:items-center justify-center mx-auto"
            elevation={0}
            sx={{ maxWidth: { md: 600, xl: "100%" } }}
          >
            <CardMedia
              className="relative xl:order-2 min-w-0 flex-1"
              sx={{ maxWidth: { xl: 600 } }}
            >
              <SlideShow />
            </CardMedia>
            <CardContent className="pt-8 flex-1" sx={{ maxWidth: { xl: 600 } }}>
              <Box className="flex justify-between items-center gap-x-5 mb-1 flex-wrap">
                <Box className="uppercase">
                  <Typography
                    color="primary"
                    fontSize="clamp(1.5rem, 5vw, 3rem)"
                    className="font-black"
                  >
                    Tron Cars
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
                Tron Cars is a collection of 10,000 CAR NFTs—unique digital
                collectibles coming on the Tron blockchain.
                <br />
                Your Tron Cars doubles as your Tron Town NFTs,
                <br /> and grants access to members-only benefits, the first of
                which is access to THE TRON TOWN RACE games
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
                  50 $
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

TronCars.getLayout = function getLayout(page) {
  return <MarketplaceLayout>{page}</MarketplaceLayout>;
};

export default TronCars;

const SlideShow = () => {
  const basePath = "/assets/images/";
  const slides = [
    `${basePath}cars1.jpeg`,
    `${basePath}cars2.jpeg`,
    `${basePath}cars3.jpeg`,
  ];

  return (
    <Box
      sx={{
        "& .swiper": {
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          minHeight: 0,
          px: { xl: 5 },
        },
        "& .swiper-wrapper": {
          py: 3,
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          "&::after": {
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            content: "''",
            width: 24,
            height: 24,
          },
        },
        "& .swiper-button-prev": {
          left: 0,
          "&::after": {
            backgroundImage: "url('/assets/icons/prev.png')",
          },
        },
        "& .swiper-button-next": {
          right: 0,
          "&::after": {
            backgroundImage: "url('/assets/icons/next.png')",
          },
        },
      }}
    >
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        spaceBetween={40}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box component="img" src={slide} className="rounded-3xl w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
