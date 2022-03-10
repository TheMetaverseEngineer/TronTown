import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LandingNav() {
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       // getting mobile nav items from wp
  //       const {
  //         data: { items: mobileItems },
  //       } = await axios.get(endpoints.mobileNav);

  //       // getting desktop nav items from wp
  //       const {
  //         data: { items: desktopItems },
  //       } = await axios.get(endpoints.desktopNav);

  //       // setting mobile and desktop nav items
  //       setMobileNavItems(mobileItems);
  //       setDesktopNavItems(desktopItems);
  //     } catch (e) {
  //       alert(e.message);
  //     }
  //   })();
  // }, []);

  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}

const MobileNav = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  // const [selectedIndex, setSelectedIndex] = useState(null);
  const open = Boolean(anchorEl);
  const matches = useMediaQuery("(min-width: 500px)");
  const mobileNavItems = [
    { title: "Home", href: "/" },
    { title: "Whitepaper", href: "" },
    { title: "About", href: "/#about" },
    { title: "Marketplace", href: "/market" },
    {
      title: "Launch Demo",
      href: "https://metaverse247.live:3001/trontown",
    },
  ];

  const handleMenuClicked = (index, link) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    router.push(link.url);
  };

  return (
    <Box className="md:hidden">
      <Box
        component="img"
        src="assets/logo.png"
        alt="Logo"
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50"
        maxWidth={185}
      />
      <Paper
        elevation={3}
        square
        className="bg-landing fixed bottom-0 inset-x-0 z-50"
      >
        <BottomNavigation
          component="nav"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bg-landing"
          sx={{
            height: 64,
          }}
        >
          {mobileNavItems
            ?.filter((_, i, items) => i < (matches ? items.length : 3))
            .map((link, i) => (
              <BottomNavigationAction
                key={i}
                onClick={() => router.push(link.href)}
                className="text-gray-300"
                label={link.title}
                sx={{
                  minWidth: 0,
                  "&.Mui-selected": {
                    color: "#fff !important",
                  },
                }}
              />
            ))}
          <BottomNavigationAction
            aria-controls={open ? "more-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            id="more-button"
            icon={<MoreVertIcon />}
            className={`text-gray-400 ${matches ? "hidden" : ""}`}
            sx={{
              minWidth: 0,
              "&.Mui-selected": {
                color: "#fff !important",
              },
            }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
          <MoreMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            matches={matches}
            mobileNavItems={mobileNavItems}
            open={open}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

const MoreMenu = ({ anchorEl, setAnchorEl, matches, mobileNavItems, open }) => {
  return (
    <Menu
      id="more-menu"
      anchorEl={anchorEl}
      open={open}
      className={`${matches ? "hidden" : ""}`}
      onClose={() => setAnchorEl(null)}
      MenuListProps={{
        "aria-labelledby": "more-button",
      }}
      PaperProps={{
        sx: {
          bgcolor: "primary.main",
        },
      }}
    >
      {mobileNavItems
        .filter((_, i) => i > 2)
        .map((link, i) => (
          <MenuItem
            key={i}
            // selected={selectedIndex === i}
            // onClick={() => handleMenuClicked(i, link)}
            sx={{
              "&.Mui-selected": {
                bgcolor: "primary.light",
                "&:hover": {
                  bgcolor: "primary.light",
                },
              },
            }}
          >
            <Link href={link.href} passHref>
              <a>
                <ListItemText className="text-white">{link.title}</ListItemText>
              </a>
            </Link>
          </MenuItem>
        ))}
    </Menu>
  );
};

const DesktopNav = () => {
  const desktopNavItems = [
    { title: "Home", href: "/" },
    { title: "Whitepaper", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Marketplace", href: "/market" },
    {
      title: "Launch Demo",
      href: "https://metaverse247.live:3001/trontown",
    },
  ];

  return (
    <AppBar
      className="hidden md:block bg-transparent max-w-screen-2xl mx-auto left-1/2 right-auto transform -translate-x-1/2"
      elevation={0}
    >
      <Toolbar component="nav" className="justify-between">
        <Box
          component="img"
          src="/assets/logo.png"
          alt="Logo"
          className=""
          maxWidth={150}
        />
        <Box className="flex gap-x-5 lg:gap-x-20 xl:gap-x-32">
          {desktopNavItems.map((link, i) => (
            <Link key={i} href={link.href} passHref>
              <Button component="a" className="text-white">
                {link.title}
              </Button>
            </Link>
          ))}
        </Box>
        {/* <IconButton className="text-white">
          <MenuIcon sx={{ fontSize: 50 }} />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};
