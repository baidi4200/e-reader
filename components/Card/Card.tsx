// CardComponent.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  text: string;
  text2: string;
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, text, text2 }) => {
  return (
    <Link href="/" style={{cursor: "pointer"}}>
      <Card style={{ width: 232 }} sx={{ cursor: "pointer" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          height={300}
          image={imageUrl}
          style={{ objectFit: "cover" }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              variant="h5"
              color="textSecondary"
              component="div"
              sx={{ color: "#000", marginBottom: "8px" }}
            >
              {text2}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {text}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardComponent;
