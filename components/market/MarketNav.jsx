import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./AuthModal";
import Logo from "./Logo";
import { useRouter } from "next/router";
// import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
// import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
// import GridViewIcon from "@mui/icons-material/GridView";

// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export default function MarketNav() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <MobileNav setOpenModal={setOpenModal} />
      <DesktopNav setOpenModal={setOpenModal} />
      <AuthModal showModal={openModal} setShowModal={setOpenModal} />
    </>
  );
}

const MobileNav = ({ setOpenModal }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(1);
  const open = Boolean(anchorEl);
  const mobileNavItems = [
    {
      name: "Home",
      icon: <HomeOutlinedIcon />,
      props: {
        onClick: () => router.push("/"),
      },
    },
    {
      name: "Market",
      icon: <LocalGroceryStoreOutlinedIcon />,
      subList: [
        {
          name: "Explore",
          href: "/market",
        },
        {
          name: "Tron NFT Generator",
          href: "/nft-generator",
        },
        {
          name: "Tron Surprise Egg",
          href: "/surprise-egg",
        },
        {
          name: "Tron NFT Cars",
          href: "/tron-cars",
        },
        {
          name: "Tron Town Land",
          href: "/tron-land",
        },
      ],
      props: {
        onClick: (event) => {
          setAnchorEl(event.target);
        },
      },
    },
    {
      name: "My Wallet",
      icon: <AccountBalanceWalletOutlinedIcon />,
      props: {
        onClick: () => {
          setOpenModal(true);
        },
      },
    },
  ];

  return (
    <Box className="md:hidden">
      {/* <Box
        component="img"
        src="assets/logo.png"
        alt="Logo"
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50"
        maxWidth={185}
      /> */}
      <Paper
        elevation={3}
        square
        className="bg-market fixed bottom-0 inset-x-0 z-50"
      >
        <BottomNavigation
          component="nav"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bg-market"
          sx={{
            height: 64,
          }}
        >
          {mobileNavItems.map((link, i) => {
            if (link?.subList)
              return [
                <BottomNavigationAction
                  key={i}
                  {...link.props}
                  className="text-gray-300 grow"
                  label={link?.name}
                  icon={link.icon}
                  sx={{
                    minWidth: 0,
                    "&.Mui-selected": {
                      color: "#fff !important",
                    },
                  }}
                />,
                <SubMenu
                  key={`sub-menu-${i}`}
                  subMenu={link.subList}
                  open={open}
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                />,
              ];

            return (
              <BottomNavigationAction
                key={i}
                {...link.props}
                className="text-gray-300 grow"
                label={link?.name}
                icon={link.icon}
                sx={{
                  minWidth: 0,
                  "&.Mui-selected": {
                    color: "#fff !important",
                  },
                }}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

const DesktopNav = ({ setOpenModal }) => {
  const [openMarketSubList, setOpenMarketSubList] = useState(true);

  const links = [
    {
      name: "Home",
      icon: <HomeOutlinedIcon />,
      href: "/",
    },
    {
      name: "Market",
      icon: <LocalGroceryStoreOutlinedIcon />,
      href: "/",
      subList: [
        {
          name: "Explore",
          href: "/market",
        },
        {
          name: "Tron NFT Generator",
          href: "/nft-generator",
        },
        {
          name: "Tron Surprise Egg",
          href: "/surprise-egg",
        },
        {
          name: "Tron NFT Cars",
          href: "/tron-cars",
        },
        {
          name: "Tron Town Land",
          href: "/tron-land",
        },
      ],
      props: {
        onClick: (event) => {
          event.preventDefault();
          setOpenMarketSubList((prev) => !prev);
        },
      },
    },
    {
      name: "My Wallet",
      icon: <AccountBalanceWalletOutlinedIcon />,
      href: "/",
      props: {
        onClick: (event) => {
          event.preventDefault();
          setOpenModal(true);
        },
      },
    },
  ];
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{
        width: 250,
        "& .MuiDrawer-paper": {
          borderRight: "1px solid #DBDBDB",
          bgcolor: "transparent",
          overflow: "hidden auto",
        },
      }}
      className="hidden md:block"
    >
      <Box
        bgcolor="transparent"
        className="h-full text-white relative"
        width={250}
      >
        <Box className="px-4 py-5">
          <Logo />
        </Box>
        <List>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <Link passHref href={link?.href}>
                <ListItemButton {...link.props}>
                  <ListItemIcon className="text-white">
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>{link.name}</Typography>
                  </ListItemText>
                  {link?.subList &&
                    (openMarketSubList ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </Link>
              {link?.subList && (
                <SubList subList={link.subList} open={openMarketSubList} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

const SubList = ({ subList, open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List sx={{ pl: 4 }}>
        {subList.map((item, i) => (
          <Link passHref href={item?.href} key={i}>
            <ListItemButton {...item.props}>
              {/* <ListItemIcon className="text-white">
                            {item.icon}
                          </ListItemIcon> */}
              <ListItemText>
                <Typography>{item.name}</Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Collapse>
  );
};

const SubMenu = ({ subMenu, open, anchorEl, setAnchorEl }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
      PaperProps={{
        sx: {
          bgcolor: "primary.main",
          color: "#fff",
        },
      }}
    >
      {subMenu.map((item, i) => (
        <MenuItem key={i} {...item?.props}>
          {/* <ListItemIcon className="text-white">{link.icon}</ListItemIcon> */}
          <Link href={item.href} passHref>
            <a>
              <ListItemText>{item.name}</ListItemText>
            </a>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};
