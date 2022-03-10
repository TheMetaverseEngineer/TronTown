import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

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
  const mobileNavItems = [
    { title: "Home", href: "/" },
    { title: "Whitepaper", href: "" },
    { title: "About", href: "/#about" },
    {
      title: "Marketplace",
      subLinks: [
        {
          title: "Explore",
          href: "/market",
        },
        {
          title: "Tron NFT Generator",
          href: "/nft-generator",
        },
        {
          title: "Tron Surprise Egg",
          href: "/surprise-egg",
        },
        {
          title: "Tron NFT Cars",
          href: "/tron-cars",
        },
        {
          title: "Tron Town Land",
          href: "/tron-land",
        },
      ],
    },
    {
      title: "Launch Demo",
      onClick: () => router.push("https://metaverse247.live:3001/trontown"),
    },
  ];

  // const handleMenuClicked = (index, link) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  //   router.push(link.url);
  // };

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
            ?.filter((_, i) => i < 3)
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
            icon={<MoreVertIcon />}
            className={`text-gray-400`}
            sx={{
              minWidth: 0,
              "&.Mui-selected": {
                color: "#fff !important",
              },
            }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
          <SubMenu
            className="md:hidden"
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            items={mobileNavItems.filter((_, i) => i > 2)}
            open={open}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

const DesktopNav = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const desktopNavItems = [
    { title: "Home", onClick: () => router.push("/") },
    { title: "Whitepaper", onClick: () => router.push("/") },
    { title: "About", onClick: () => router.push("/#about") },
    {
      title: "Marketplace",
      onClick: (event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
      },
      href: "/",
      subLinks: [
        {
          title: "Explore",
          onClick: () => router.push("/market"),
        },
        {
          title: "Tron NFT Generator",
          onClick: () => router.push("/nft-generator"),
        },
        {
          title: "Tron Surprise Egg",
          onClick: () => router.push("/surprise-egg"),
        },
        {
          title: "Tron NFT Cars",
          onClick: () => router.push("/tron-cars"),
        },
        {
          title: "Tron Town Land",
          onClick: () => router.push("/tron-land"),
        },
      ],
    },
    {
      title: "Launch Demo",
      onClick: () => router.push("https://metaverse247.live:3001/trontown"),
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
            <Fragment key={i}>
              <Button
                component="a"
                className="text-white"
                onClick={link?.onClick}
              >
                {link.title}
              </Button>
              {!!link?.subLinks && (
                <SubMenu
                  className="hidden md:block"
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                  items={link?.subLinks}
                  open={open}
                />
              )}
            </Fragment>
          ))}
        </Box>
        {/* <IconButton className="text-white">
          <MenuIcon sx={{ fontSize: 50 }} />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

const SubMenu = ({ anchorEl, setAnchorEl, items, open, className }) => {
  const [openCollapsed, setOpenCollapsed] = useState(false);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
      className={`${className}`}
      PaperProps={{
        sx: {
          bgcolor: "primary.main",
        },
      }}
    >
      {items.map((item, i) => {
        if (item.subLinks) return <CollapsibleMenuItem key={i} item={item} />;

        return (
          <MenuItem
            onClick={item?.onClick}
            key={i}
            // selected={selectedIndex === i}
            // onClick={() => handleMenuClicked(i, item)}
            className="text-white"
            sx={{
              "&.Mui-selected": {
                bgcolor: "primary.light",
                "&:hover": {
                  bgcolor: "primary.light",
                },
              },
            }}
          >
            <ListItemText>{item.title}</ListItemText>
            {!!item?.subLinks &&
              (openCollapsed ? <ExpandLess /> : <ExpandMore />)}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

const CollapsibleMenuItem = ({ item }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <MenuItem
        onClick={() => setOpen((prev) => !prev)}
        className="text-white"
        sx={{
          minWidth: 185,
          "&.Mui-selected": {
            bgcolor: "primary.light",
            "&:hover": {
              bgcolor: "primary.light",
            },
          },
        }}
      >
        <ListItemText>{item.title}</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="text-white">
          {item.subLinks.map((link, i) => (
            <Link href={link.href} passHref key={i}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};
