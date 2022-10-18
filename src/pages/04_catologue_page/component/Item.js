import { Card, CardContent, CardHeader, CardMedia, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import React from 'react'
import { getStrapiMultipleMedia } from "../../../ultis/api";

function Item({ data }) {
  const { brand, description, image, name } = data?.attributes
  //get the first image
  const url = getStrapiMultipleMedia(image)[0]
  console.log(brand)
  const itemBrand = !brand?.data ? "" : brand?.data.attributes.name
  return (
    <Card sx={{ margin: 5, minWidth: "320px", width: '90%' }}>
      <CardMedia
        component="img"
        src={url}
        alt="Paella dish"
      />
      <CardHeader
        title={name}
        subheader={itemBrand}
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