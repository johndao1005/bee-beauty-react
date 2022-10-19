import React from "react";
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { getStrapiMedia } from "../../../ultis/api";


const Article = ({ data }) => {
  const { description, image, title, like, createdAt } = data.attributes
  console.log(image)
  const url = getStrapiMedia(image)
  const date = createdAt.substring(0, 10)
  const shortDescription = description.length > 50 ? `${description.substring(0,60)}...`:description
  const likeNumber = () => {
    if (!like || like === 0) {
      return (
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      )
    }

    return (
      <IconButton aria-label="add to favorites">
        <Badge badgeContent={like} color="error">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    )
  }

  return (
    <Card sx={{ margin: 5, minWidth: "320px", width: '90%' }}>
      <CardHeader
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        src={url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {likeNumber()}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Article;