"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import GetBook from "@/components/GetBook/GetBook";
import CardComponent from "@/components/Card/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const images = [
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  // Add more image URLs as needed
];
const books = [
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];
export default function page() {
  const minArrayLength = Math.min(books.length, images.length);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 0px",
      }}
    >
      <Grid container item spacing={2}>
        <Grid item sm={12} md={12} sx={{ padding: "0 0px" }}>
          <GetBook />
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={12}
          sx={{
            padding: "0px 40px",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
            height: "50vh", // Set the container height to 100% of the viewport height
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
              width: "100%", // Set the width to 100%
              height: "100%", // Set the height to 100%
            }}
          >
            {images.slice(0, minArrayLength).map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <Grid
                  item
                  style={{ flex: " 0 25%", maxWidth: "25%" }}
                >
                  <CardComponent
                    imageUrl={imageUrl}
                    text={`by ${books[index].author}`}
                    text2={`${books[index].title}`}
                  />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
