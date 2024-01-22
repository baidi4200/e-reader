"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "0vh", // Set the minimum height of the container to 100% of the viewport height
      }}
    >
      <AppBar
        position="static"
        color="primary"
        sx={{
          marginTop: "auto",
          background: "#FFFFFF",
          width: "100%", // Make the footer full width
        }}
      >
        <Toolbar>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, color: "#000" }}
          >
            © 2024 shenefelts
          </Typography>
          <div>
            <IconButton sx={{ color: "#000" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
