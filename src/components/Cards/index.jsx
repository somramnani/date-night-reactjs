import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";

export default function Cards({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image_url}
        title="restauraunt image"
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {data.name}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {data.price} &#x2022; {data.rating} &#x2022; {data.review_count}{" "}
          reviews
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <LocationOnIcon />
          {data.location.display_address.map((data) => {
            return data;
          })}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Phone Number: {data.phone}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
