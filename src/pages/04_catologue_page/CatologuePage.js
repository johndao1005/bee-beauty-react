import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  FormControl,
  MenuItem,
  Select,
  FormLabel,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default function CatologuePage() {
  const [filter, setFilter] = useState("mac")
  const [view, setView] = useState(null)

  const handleFilterChange = (e) => {
    e.preventDefault()
    console.log(e)
    setFilter(e.target)
  }
  
  const heroPhoto = {
    description: "hero picture",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  }

  const productSection = () => {
    return (
      <>
        <Typography
          variant="h1"
          sx={{
            ml: 3,
            my: 3,
            mt: 5,
            fontSize: 50,
            fontFamily: 'monospace',
            fontWeight: 1000,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          Product
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ml: 3,
            mb: 3,
            px: 5,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
        <FormControl>
          <FormLabel>Topic</FormLabel>
          <Select
            name="os"
            value={filter}
            onChange={handleFilterChange}
            sx={{ display: 'flex', minWidth: '280px' }}
          >
            <MenuItem key="mac" value="mac">
              Mac
            </MenuItem>
            <MenuItem key="windows" value="windows">
              Windows
            </MenuItem>
            <MenuItem key="linux " value="linux">
              Linux
            </MenuItem>
          </Select>
        </FormControl>

        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  // <IconButton
                  //   sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  //   aria-label={`info about ${item.title}`}
                  // >
                  <InfoIcon />
                  // </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </>
    )
  }
  const serviceSection = () => {
    return (
      <>
        <Typography
          variant="h1"
          sx={{
            ml: 3,
            my: 3,
            fontSize: 50,
            fontFamily: 'monospace',
            fontWeight: 1000,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          Service
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ml: 3,
            mb: 3,
            px: 5,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
        <FormControl>
          <FormLabel>Topic</FormLabel>
          <Select
            name="os"
            value={filter}
            onChange={handleFilterChange}
            sx={{ display: 'flex', minWidth: '280px' }}
          >
            <MenuItem key="mac" value="mac">
              Mac
            </MenuItem>
            <MenuItem key="windows" value="windows">
              Windows
            </MenuItem>
            <MenuItem key="linux " value="linux">
              Linux
            </MenuItem>
          </Select>
        </FormControl>

        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  // <IconButton
                  //   sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  //   aria-label={`info about ${item.title}`}
                  // >
                  <InfoIcon />
                  // </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </>
    )
  }

  return (
    <Grid container direction="column" alignContent='center' justifyContent='center' sx={{mb:10}}>
      {productSection()}
      {serviceSection()}
    </Grid>
  )
}
