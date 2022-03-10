import { Avatar, Tooltip, Typography } from "@mui/material";
import { getEllipsisTxt } from "../../helpers/formatter";

const Account = ({ size }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      <Avatar />
      <Tooltip title={window.tronWeb.defaultAddress.base58} arrow>
        <Typography className="text-lg whitespace-nowrap leading-none">
          {getEllipsisTxt(window.tronWeb.defaultAddress.base58, size)}
        </Typography>
      </Tooltip>
    </div>
  );
};

export default Account;
