import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography
} from '@mui/material';

const heroPhoto = {
  description: "hero picture",
  url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
}

export default function BlogPage() {
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState(null)
  const handleFilterChange = (e) => {
    e.preventDefault()
    console.log(e)
    setFilter(e.target)
  }

  const postList = () => {
    return (
      <>
        <Card sx={{maxWidth: 500, margin: 12}}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            src={heroPhoto.url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
        <Card sx={{maxWidth: 500, margin: 12}}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            src={heroPhoto.url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
        <Card sx={{maxWidth: 500, margin: 12}}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            src={heroPhoto.url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
        <Card sx={{maxWidth: 500, margin: 12}}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            src={heroPhoto.url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
      </>
    )
  }


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
        Wendy Tran
      </Typography>
      <Grid container lg={12} columnGap={3} justifyContent='center' alignContent='center' >
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
      </Grid>
      <Typography
        variant="h6"
        sx={{
          ml: 3,
          my: 4,
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
      {postList()}
    </>
  )
}
