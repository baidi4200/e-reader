"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardComponent from "@/components/Card/Card";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import SyncIcon from "@mui/icons-material/Sync";
import InputAdornment from "@mui/material/InputAdornment";
const drawerWidth = 240;


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
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",  "https://beyond-projects.s3.us-east-2.amazonaws.com/e-reader-app/images/image%2010.png",
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
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }, { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }, { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

export default function ResponsiveDrawer() {
  const minArrayLength = Math.min(books.length, images.length);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Grid item container spacing={0}>
          <Grid item sm={6} md={6} sx={{ padding: "0 0px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "left",
                flexDirection: "row",
              }}
            >
              <Image
                src="/Filter.svg"
                alt="Filterlogo"
                width={20}
                height={20}
                priority={true}
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "600" }}>
                Filters
              </Typography>
            </div>
          </Grid>
          <Grid item sm={6} md={6} sx={{ padding: "0 0px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "right",
                flexDirection: "row",
              }}
            >
              <SyncIcon sx={{ color: "#6C737F" }} />
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: "600", color: "#6C737F" }}
              >
                Reset All
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ ml: 2, fontWeight: "600" }}>
          Genre
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Fiction"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Action"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Horror"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Mystery"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Thriller"
            sx={{ ml: 4 }}
          />
        </FormGroup>
        <Typography variant="h6" gutterBottom sx={{ ml: 2, fontWeight: "600" }}>
          Language
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="English"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Thai"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Russian"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Spanish"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Chinese"
            sx={{ ml: 4 }}
          />
        </FormGroup>
        <Typography variant="h6" gutterBottom sx={{ ml: 2, fontWeight: "600" }}>
          Year
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="2011"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2012"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2013"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2014"
            sx={{ ml: 4 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2015"
            sx={{ ml: 4 }}
          />
        </FormGroup>
      </List>
    </div>
  );


  // Remove this const when copying and pasting into your project.
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div>
          <Grid item container spacing={4} alignItems="center">
            <Grid item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                Library
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              container
              alignItems="center"
              sx={{ justifyContent: "right" }}
            >
              <form>
                <TextField
                  id="search-bar"
                  className="text"
                  label="Enter a book name"
                  variant="outlined"
                  placeholder="Search..."
                  style={{ width: "900px" }}
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton type="submit" aria-label="search">
                          <SearchIcon style={{ fill: "blue" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{
                            borderRadius: "0 0px 0px 2px", // Remove right border
                            height: "40px", // Adjust the height to match TextField height
                            borderColor: "#f5f3f3",
                            borderRight: "none",
                            borderLeft: "1.5px solid #f5f3f3",
                          }}
                        >
                          Search
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Grid>
          </Grid>
          <Grid item container spacing={4} sx={{ pt: 4 }}>
            {images.slice(0, minArrayLength).map((imageUrl, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardComponent
                  imageUrl={imageUrl}
                  text={`by ${books[index].author}`}
                  text2={`${books[index].title}`}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </Box>
  );
}
