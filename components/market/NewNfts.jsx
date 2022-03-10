import { Avatar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewNfts() {
  return (
    <Box
      bgcolor="rgba(255,255,255,0.13)"
      borderRadius={10}
      maxWidth={450}
      className="p-5 mx-auto"
    >
      <NftSlideShow />
      <Sibling />
    </Box>
  );
}

// slide show component
const NftSlideShow = () => {
  const slides = [
    {
      image: "/assets/images/generator.jpeg",
      title: "Tron NFT Generator",
      desc: "Create 3D NFT collection with no code, Presale started",
      href: "/nft-generator",
    },
    {
      image: "/assets/images/surprise-egg1.jpeg",
      title: "Tron Surprise Egg",
      desc: "The Only Tron Surprise Egg Gives you chance to win 1000$ in TRX",
      href: "/surprise-egg",
    },
    {
      image: "/assets/images/jeep.jpeg",
      title: "Tron NFT Car",
      desc: "10,000 unique Tron NFT car collection for Tron Town Metaverse, Start race with your car",
      href: "/tron-cars",
    },
    {
      image: "/assets/images/land.jpeg",
      title: "Tron Town Land",
      desc: "Get whitelisted for upcomming NFT Land in Tron Town Metaverse",
      href: "/tron-land",
    },
    {
      image: "/assets/images/surprise-egg2.jpeg",
      title: "Tron Town Land",
      desc: "The Only Tron Surprise Egg Gives you chance to win 1000$ in TRX",
      href: "/surprise-egg",
    },
  ];

  return (
    <Box
      sx={{
        "& .swiper": {
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          minHeight: 0,
          px: 2,
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
            <Box borderRadius={10} maxWidth="75%" mx="auto">
              <Link href={slide.href} passHref>
                <a>
                  <img
                    src={slide.image}
                    className="mx-auto rounded-2xl cursor-pointer"
                    alt={slide.title}
                  />
                </a>
              </Link>
            </Box>
            <Box
              className="bg-market px-5 text-center py-2 text-white mt-3"
              boxShadow="0 15px 6px rgba(0,0,0,0.29)"
              borderRadius={5}
            >
              <Typography>{slide.desc}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

// slide show sibling
const Sibling = () => {
  const newNfts = [
    {
      image: "/assets/images/generator.jpeg",
      title: "Tron NFT Generator",
      desc: "Create 3D NFT collection with no code, Presale started",
      href: "/nft-generator",
    },
    {
      image: "/assets/images/jeep.jpeg",
      title: "Tron NFT Car",
      desc: "10,000 unique Tron NFT car collection for Tron Town Metaverse, Start race with your car",
      href: "/tron-cars",
    },
    {
      image: "/assets/images/land.jpeg",
      title: "Tron Town Land",
      desc: "Get whitelisted for upcomming NFT Land in Tron Town Metaverse",
      href: "/tron-land",
    },
  ];

  return (
    <Box className="mt-5">
      <Box className="flex justify-between items-center gap-x-5 mb-4">
        <Typography fontSize="clamp(1.1rem, 3vw, 1.5rem)" className="font-bold">
          Recently
        </Typography>
        {/* <Link href="" passHref scroll={false}> */}
        <Button
          component="a"
          className="text-xs"
          sx={{ color: "#fff !important" }}
        >
          see more
        </Button>
        {/* </Link> */}
      </Box>
      <Box className="flex flex-col gap-y-3">
        {newNfts.map((nft, i) => (
          <Link href={nft.href} scroll={false} key={i} passHref>
            <a>
              <Box
                key={i}
                sx={{
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.25)",
                    transition: "background-color .3s ease-out",
                  },
                }}
                bgcolor="rgba(255,255,255,0.13)"
                className="flex flex-col gap-y-3 gap-x-5 items-center px-4 py-3 text-center cursor-pointer xs:flex-row xs:text-left"
                borderRadius={5}
              >
                <Avatar
                  src={nft.image}
                  sx={{ width: 90, height: 90 }}
                  alt={nft.title}
                />
                <Box>
                  <Typography className="font-bold">{nft.title}</Typography>
                  <Typography className="text-sm">{nft.desc}</Typography>
                </Box>
              </Box>
            </a>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
