import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import CustomAlert from "./CustomAlert";
import Account from "./Account";
import { useTronWeb } from "../providers/TronWebProvider";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validation/signup";
import axios from "axios";
import qs from "qs";

const TabPanel = (props) => {
  const { children, value, index, title, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogContent>
            {children}
            <Button
              fullWidth
              color="error"
              className="mt-3"
              // onClick={handleLogout}
            >
              Logout
            </Button>
          </DialogContent>
        </>
      )}
    </div>
  );
};

const WalletTabPanel = ({ value }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (window?.tronLink?.ready) {
          setBalance(await window?.tronWeb?.trx?.getBalance());
        }
      } catch (e) {
        setShowAlert(true);
        setAlertMessage(e.message);
      }
    })();
  });

  return (
    <TabPanel value={value} index={0} title="Your Wallet">
      <Box className="flex flex-col gap-5">
        <Box className="flex w-full p-3 rounded-lg shadow-xl justify-center text-white bg-market">
          <Account size={7} />
        </Box>
        <Typography className="text-left">
          Your Balance: {balance} SUN
        </Typography>
      </Box>
    </TabPanel>
  );
};

const ProfileTabPanel = ({ value, setShowAlert, setAlertMessage }) => {
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem("user"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.name,
      username: user.username,
      email: user.email,
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/user`,
        qs.stringify(data),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(res?.data?.result));
    } catch (e) {
      setShowAlert(true);
      setAlertMessage(e?.response?.data?.message || e.message);
    }
  };

  return (
    <TabPanel value={value} index={1} title="Profile">
      <Box className="pt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="flex flex-col gap-y-3">
            <TextField
              disabled={!!user}
              label="Name"
              fullWidth
              {...register("name")}
              error={errors.name?.message}
              helperText={errors.name?.message}
            />
            <TextField
              disabled={!!user}
              label="Useranme"
              fullWidth
              {...register("username")}
              error={errors.username?.message}
              helperText={errors.username?.message}
            />
            <TextField
              disabled={!!user}
              label="Email"
              fullWidth
              {...register("email")}
              error={errors.email?.message}
              helperText={errors.email?.message}
            />
            <TextField
              className="hidden"
              type="hidden"
              {...register("wallet_address")}
              defaultValue={window.tronWeb.defaultAddress.base58}
            />
            <Button
              disabled={!!user}
              type="submit"
              variant="contained"
              size="large"
              sx={{
                bgcolor: theme.palette.success.main + " !important",
                "&:hover": {
                  bgcolor: theme.palette.success.dark + " !important",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </TabPanel>
  );
};

export default function AuthModal({ showModal, setShowModal }) {
  const { tw } = useTronWeb();
  const [value, setValue] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // check wallet is connected
  useEffect(() => {
    try {
      if (window?.tronLink?.ready) {
        setIsAuthenticated(true);

        // check if the user object exists in localStorage
        if (localStorage.getItem("user")) return;

        (async () => {
          // check the database and set user info in local storage
          const res = await axios.get(
            `http://localhost:3000/api/user?wallet_address=${window?.tronWeb?.defaultAddress?.base58}`
          );
          localStorage.setItem("user", JSON.stringify(res?.data?.result[0]));
        })();
      } else {
        setIsAuthenticated(false);
      }
    } catch (e) {
      setShowAlert(true);
      setAlertMessage(e?.response?.data?.message || e?.message);
    }
  });

  const handleConnectWallet = async () => {
    try {
      // if the user has been authenticated retun
      if (window?.tronWeb?.ready) return;

      // if the tronLink is installed send connect request otherwise show the alert
      if (window.tronWeb) {
        const res = await window.tronLink.request({
          method: "tron_requestAccounts",
        });

        // if the user doesn't accept the connect request show the alert
        if (res.code === 4001) {
          setShowAlert(true);
          setAlertMessage("Connection failed");
          return;
        }

        tw.setAddress(window.tronWeb.defaultAddress.base58);

        setShowModal(false);
      } else {
        setShowAlert(true);
        setAlertMessage(
          "You must install TronLink or unlock your TronLink wallet"
        );
      }
    } catch (e) {
      setShowAlert(true);
      setAlertMessage(e.message);
    }
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  if (isAuthenticated)
    return (
      <>
        <Dialog
          maxWidth="xs"
          fullWidth
          open={showModal}
          onClose={() => setShowModal(false)}
          sx={{
            "& .MuiDialog-paper": {
              // bgcolor: "primary.main",
              borderRadius: 5,
              position: "relative",
            },
          }}
        >
          <IconButton
            onClick={() => setShowModal(false)}
            className="absolute top-12 right-2"
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChangeTab}>
              <Tab label="Wallet" {...a11yProps(0)} />
              <Tab label="Profile" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <WalletTabPanel value={value} />
          <ProfileTabPanel
            value={value}
            setShowAlert={setShowAlert}
            setAlertMessage={setAlertMessage}
          />
        </Dialog>
        <CustomAlert
          message={alertMessage}
          setShowAlert={setShowAlert}
          showAlert={showAlert}
          variant="filled"
        />
      </>
    );

  return (
    <>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={showModal}
        onClose={() => setShowModal(false)}
        sx={{
          "& .MuiDialog-paper": {
            // bgcolor: "primary.main",
            borderRadius: 5,
          },
        }}
      >
        <IconButton
          onClick={() => setShowModal(false)}
          className="absolute top-1 right-2"
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle className="text-center">Connect Wallet</DialogTitle>
        <DialogContent>
          <Button
            onClick={handleConnectWallet}
            variant="contained"
            color="primary"
            className="normal-case justify-start rounded-xl"
            sx={{
              bgcolor: "#D80024 !important",
            }}
            startIcon={<Avatar src="/assets/icons/tronlink.png" />}
            fullWidth
          >
            <Typography className="font-medium">TronLink</Typography>
          </Button>
        </DialogContent>
      </Dialog>
      <CustomAlert
        message={alertMessage}
        setShowAlert={setShowAlert}
        showAlert={showAlert}
        variant="filled"
      />
    </>
  );
}
