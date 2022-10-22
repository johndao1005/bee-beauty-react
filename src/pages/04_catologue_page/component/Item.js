import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { getStrapiMultipleMedia } from "../../../ultis/api";

function Item({ data }) {
  const { brand, description, image, name } = data?.attributes
  //get the first image
  const url = getStrapiMultipleMedia(image)[0]
  return (
    <Card  sx={{  minWidth: "300px", width: '90%', py: 2,px:2 }}>
      <CardMedia
        component="img"
        src={url}
        alt="Paella dish"
        sx={{ height: '80%', width: '80%', margin: "0px auto" }}
      />
      <CardHeader
        title={
        <Typography variant='subTitle' color="secondary" sx={{pb: 0,mb:0}} >
          {name}
        </Typography>
        }
      />
      <CardContent>
        <Typography variant='content' >
          {description}
        </Typography>
      </CardContent>

    </Card>
  )
}

export default Item