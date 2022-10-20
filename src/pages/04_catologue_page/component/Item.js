import { Card, CardContent, CardHeader, CardMedia, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React from 'react'
import { getStrapiMultipleMedia } from "../../../ultis/api";

function Item({ data }) {
  const { brand, description, image, name } = data?.attributes
  //get the first image
  const url = getStrapiMultipleMedia(image)[0]
  return (
    <Card raised sx={{ margin: 5, minWidth: "320px", width: '90%',py: 2 }}>
      <CardMedia
        component="img"
        src={url}
        alt="Paella dish"
        sx={{ height: '70%', width: '60%', margin: "0px auto" }}
      />
      <CardHeader
        title={name}
      />
      <CardContent>
        <Typography >
          {description}
        </Typography>
      </CardContent>

    </Card>
  )
}

export default Item