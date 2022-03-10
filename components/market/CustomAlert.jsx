import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton, Snackbar } from "@mui/material";

export default function CustomAlert({
  showAlert,
  setShowAlert,
  message,
  severity = "error",
  variant = "standard",
}) {
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={5000}
      onClose={handleCloseAlert}
      action={
        <IconButton onClick={() => setShowAlert(false)}>
          <CloseIcon />
        </IconButton>
      }
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      sx={{ width: { sm: 400 } }}
    >
      <Alert
        onClose={handleCloseAlert}
        severity={severity}
        sx={{ width: "100%" }}
        variant={variant}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
