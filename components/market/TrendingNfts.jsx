import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const TrendingNfts = () => {
  return (
    <div className="flex flex-col xl:col-span-3">
      <div className="flex justify-between items-center gap-5 py-3">
        <Typography
          component="h1"
          className="font-semibold leading-none"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Trending NFT&apos;s
        </Typography>
        <Categories />
      </div>
      <NftsSlideShow />
    </div>
  );
};

export default TrendingNfts;

const Categories = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const showMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="gap-7 md:gap-4 lg:gap-7 hidden sm:flex">
        {["Art", "Music", "Collectibles", "See more"].map((e, i) => (
          // <Link href="" scroll={false} passHref key={i}>
          <Button
            key={i}
            underline="hover"
            className="text-xs font-bold"
            sx={{ color: "#fff !important" }}
          >
            {e}
          </Button>
          // </Link>
        ))}
      </div>
      <div className="block sm:hidden">
        <IconButton
          id="menu-btn"
          className="text-white"
          onClick={handleClick}
          aria-controls={showMenu ? "trending-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={showMenu ? "true" : undefined}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="trending-menu"
          anchorEl={anchorEl}
          open={showMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menu-btn",
          }}
        >
          {["Art", "Music", "Collectibles", "See more"].map((e, i) => (
            <MenuItem key={i} className="pr-20">
              {e}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};

const SwiperItem = ({ nft }) => {
  return (
    <Box>
      <Box>
        <Link href={nft.href} scroll={false} passHref>
          <a>
            <Box
              component="img"
              src={nft.image}
              borderRadius={10}
              className="mx-auto cursor-pointer"
              alt={nft.title}
            />
          </a>
        </Link>
      </Box>
      <Box
        bgcolor="rgba(216,216,216,0.74)"
        borderRadius={5}
        className="py-4 px-5 mx-auto relative -top-10 text-center text-black"
        maxWidth={175}
      >
        <Typography component="h2" className="font-bold text-2xl">
          {nft.title}
        </Typography>
        {/* <Typography className="font-thin">Lorem ipsum dolor sit</Typography> */}
      </Box>
    </Box>
  );
};

const NftsSlideShow = () => {
  const slides = [
    {
      image: "/assets/images/generator.jpeg",
      title: "Tron NFT Generator",
      desc: "Create 3D NFT collection with no code, Presale started",
      href: "/nft-generator",
    },
    {
      image: "/assets/images/surprise-egg2.jpeg",
      title: "Tron Surprise Egg",
      desc: "Get whitelisted for upcomming NFT Land in Tron Town Metaverse",
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
      image: "/assets/images/surprise-egg1.jpeg",
      title: "Tron Surprise Egg",
      desc: "Get whitelisted for upcomming NFT Land in Tron Town Metaverse",
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
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          "&::after": {
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            content: "''",
            width: 30,
            height: 30,
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
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        spaceBetween={20}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 2,
          },
          1500: {
            slidesPerView: 3,
          },
          1800: {
            slidesPerView: 4,
          },
        }}
      >
        {slides.map((nft, i) => (
          <SwiperSlide key={i}>
            <SwiperItem nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
