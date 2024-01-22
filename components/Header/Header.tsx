"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  return (
    <AppBar
      position="static"
      sx={{ background: "#FFFFFF", textAlign: "center" }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", cursor: "pointer" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logo.svg"
              alt="headerlogo"
              width={40}
              height={37}
              priority={true}
              style={{
                maxWidth: "100%",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => router.push("/Books")}
            />
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
