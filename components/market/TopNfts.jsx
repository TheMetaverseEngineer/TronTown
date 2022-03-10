import { Avatar, Box, Button, Typography } from "@mui/material";
import { FreeMode, Grid, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function TopNfts() {
  return (
    <div>
      <div className="flex flex-col xs:flex-row justify-between items-center gap-5 py-3">
        <Typography
          component="h2"
          fontFamily="candara"
          className="font-semibold leading-none"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Top NFT&apos;s
        </Typography>
        <div className="flex">
          <Button
            className="px-5 py-2.5 normal-case rounded-full"
            sx={{ color: "#fff !important" }}
          >
            Last 7 days
          </Button>
          <Button
            className="px-5 py-2.5 normal-case rounded-full"
            sx={{ color: "#fff !important" }}
          >
            All times
          </Button>
        </div>
      </div>
      <Box borderRadius={{ md: 10 }}>
        <CategoriesSlideShow />
        <NftsSlideShow />
      </Box>
    </div>
  );
}

// categories slideshow (free-mode)
const CategoriesSlideShow = () => {
  const categories = [
    {
      name: "Wearable",
      icon: <i className="fa-solid fa-shirt" />,
      disable: true,
    },
    {
      name: "Land",
      icon: <i className="fa-solid fa-earth-europe" />,
      disable: true,
    },
    { name: "Keys", icon: <i className="fa-solid fa-key" />, disable: true },
    {
      name: "NftTools",
      icon: <i className="fa-solid fa-screwdriver-wrench" />,
      disable: true,
    },
    { name: "Others", icon: <i className="fa-solid fa-ellipsis" /> },
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
      }}
    >
      <Swiper
        className="pb-4 mb-1"
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        modules={[FreeMode, Scrollbar]}
      >
        {categories.map((category, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <Button
              disabled={category?.disable}
              variant="contained"
              key={i}
              disableElevation
              sx={{
                bgcolor: "rgba(77,84,91,0.8) !important",
                width: 190,
                "&:focus-within, &:focus": {
                  bgcolor: "#D80024 !important",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.77)",
                },
              }}
              className="rounded-full py-3 self-start flex-shrink-0"
              startIcon={category.icon}
            >
              {category.name}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

// nfts slide show
const NftsSlideShow = () => {
  // const slides = [
  //   "/assets/images/surprise-egg1.jpeg",
  //   "/assets/images/surprise-egg2.jpeg",
  // ];

  return (
    <>
      {/* 

    for screens before xl breakpoint 
    
    */}
      <Box
        className="2xl:hidden"
        sx={{
          "& .swiper": {
            width: "100%",
            maxWidth: "100%",
            minWidth: 0,
            minHeight: 0,
            borderRadius: 10,
          },
          "& .swiper-wrapper": {
            bgcolor: "rgba(255,255,255,0.13)",
            borderRadius: 10,
            py: 1,
            minWidth: 0,
          },
          "& .swiper-button-next, & .swiper-button-prev": {
            color: "primary.main",
            "&::after": {
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              content: "''",
              width: 24,
              height: 24,
            },
          },
          "& .swiper-button-prev": {
            "&::after": {
              backgroundImage: "url('/assets/icons/prev.png')",
            },
          },
          "& .swiper-button-next": {
            "&::after": {
              backgroundImage: "url('/assets/icons/next.png')",
            },
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 2,
            fill: "row",
          }}
          navigation
          modules={[Grid, Navigation]}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            768: {
              slidesPerView: 1,
              grid: { rows: 2 },
            },
            950: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
            1280: {
              slidesPerView: 1,
              grid: { rows: 2 },
            },
          }}
        >
          {Array.from(new Array(10)).map((_, i) => (
            <SwiperSlide key={i} className="min-w-0">
              <Box
                className="flex flex-col gap-y-3 gap-x-5 items-center px-4 py-3 text-center xs:flex-row xs:text-left"
                borderRadius={5}
              >
                <Link href="/surprise-egg" passHref>
                  <a>
                    <Avatar
                      src="/assets/images/tron-egg.png"
                      sx={{ width: 89, height: 89 }}
                      alt="Tron Surprise Egg"
                    />
                    <Box>
                      <Typography>Tron Surprise Egg</Typography>
                      <Typography>
                        The Only Surprise Egg living on tron network
                      </Typography>
                    </Box>
                  </a>
                </Link>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* 

    for screens after xl breakpoint 
    
    */}

      <Box className="hidden 2xl:grid grid-cols-5 gap-y-5 gap-x-5 w-full">
        {Array.from(new Array(10)).map((_, i) => (
          <Box className="flex flex-col gap-y-1" key={i}>
            <Link href="/surprise-egg" passHref>
              <a>
                <Avatar
                  src="/assets/images/tron-egg.png"
                  alt="Tron Surprise Egg"
                  sx={{ width: 75, height: 75 }}
                />
                <Box className="self-center">
                  <Typography className="font-bold text-lg">
                    Tron Surprise Egg
                  </Typography>
                  <Typography className="text-sm">
                    The Only Surprise Egg living on tron network
                  </Typography>
                </Box>
              </a>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};
