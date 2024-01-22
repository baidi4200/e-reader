"use client";

import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";

type Props = {};
interface JsonData {
  [key: string]: string;
}
const jsonData: JsonData = {
  author: "F. Scott Fitzgerald",

  identifier: "9780743273565",
  identifier_ark: "ark:/13960/t8rc1tj03",
  isbn: "0743273567",
  leen: "Scribner",
  ocr: "1925",
  open_library: "English",
  open_library_edition: "Fiction",
  open_library_work: "180",
  ppi: "h7yg7",
  scanner: "Lorem Ipsum",
  usl_hit: "Lorem Ipsum",
};
const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
  padding: theme.spacing(0),
  textAlign: "center",
  borderRadius: 2,
}));
const GetBook = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleBackward = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleForward = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const dataEntries: [string, string][] = Object.entries(jsonData);
  return (
    <Box sx={{ width: "100%", mt: 0 }}>
      <Stack>
        <Item>
          <Image
            src="/Bookpdf.svg"
            alt="cover"
            width={300}
            height={100}
            style={{
              display: "inline-block",
              width: "100%",
            }}
          />
        </Item>
        <Item>
          <div
            style={{
              backgroundColor: "#F0F1F3",
              borderRadius: "15px",
              padding: "20px",
              width: "95%",
              display: "inline-block",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleBackward}
                style={{ borderRadius: "25px", width: "150px" }}
              >
                &lt; Backward
              </Button>

              <Typography variant="h6" style={{ margin: "0 16px" }}>
                {currentPage}/34
              </Typography>

              <Button
                variant="outlined"
                onClick={handleForward}
                style={{ borderRadius: "25px", width: "150px" }}
              >
                Forward &gt;
              </Button>
            </div>
          </div>
          ˝
        </Item>
        <Item>
          <Grid
            container
            item
            spacing={4}
            sx={{ padding: "0 60px", justifyContent: "center" }}
          >
            <Grid item xs={12} sx={{ textAlign: "left", padding: "32px 40px" }}>
              <Typography
                variant="h4"
                sx={{ color: "black" }}
                style={{ fontFamily: "Times New Roman" }}
              >
                War and Peace
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ mt: 0, ml: 0, color: "black" }}
                style={{ fontFamily: "Times New Roman" }}
              >
                By Tony stark
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "18px" }}
                style={{ fontFamily: "Times New Roman", color: "black" }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                fugit tempore, rerum ratione doloribus reprehenderit omnis
                incidunt enim possimus. Praesentium eveniet atque deleniti nihil
                mollitia modi, rem omnis perspiciatis, similique officiis
                tempora consequatur recusandae? Sapiente repudiandae aperiam
                exercitationem? Recusandae facilis temporibus at enim veniam
                vero sed ipsa, sint, excepturi sapiente voluptatum asperiores
                beatae eum illum possimus ut praesentium repudiandae natus
                voluptatibus officiis veritatis, quaerat facere! Dolor, odit non
                ut sed fugiat iusto, dolorem ipsum iste soluta ea pariatur
                corrupti inventore quisquam in error hic vitae officia
                consequatur consectetur obcaecati magnam.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={4}
            sx={{ padding: "0 60px", justifyContent: "center" }}
          >
            {dataEntries.map(([key, value], index) => (
              <Grid
                item
                xs={3}
                key={index}
                sx={{ textAlign: "left", padding: "32px 40px" }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ color: "#5D6679" }}
                  style={{ fontFamily: "Times New Roman" }}
                >
                  {key}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: "18px" }}
                  style={{ fontFamily: "Times New Roman", color: "black" }}
                >
                  {value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Item>
      </Stack>
    </Box>
  );
};

export default GetBook;
