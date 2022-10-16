import { Badge, Box, Button, FormControl, FormLabel, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';

const article = {
  author: {
    name: "author",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  },
  image: {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    description: 'asdas'
  },
  title: "Title",
  content: "Long content",
  like: 0,
  share: 0,
  date: "16/2"
}

function PostPage() {
  const [comment, setComment] = useState("");
  const handleInputChange = (e) => {
    setComment(e.target.value)
  }
  const infoSection = () => {
    return (
      <>
        <Typography
          variant="h1"
          sx={{
            mt: 3,
            fontSize: 50,
            fontFamily: 'monospace',
            fontWeight: 800,
            letterSpacing: '.1rem',
            color: 'inherit',
          }}>
          {article.title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            my: 1,
            fontSize: 20,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: 'inherit',
          }}>
          By: {article.author.name}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            my: 1,
            fontSize: 20,
            fontFamily: 'monospace',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: 'inherit',
          }}>
          {article.date}
        </Typography>
      </>
    )
  }

  const contentSection = () => {
    return (
      <>
        <Box
          component="img"
          alt={article.image.description}
          sx={{
            minWidth: '250px', my: 2, mx: 3,
          }}
          src={article.image.url}
        />

        <Typography
          variant="p"
          sx={{
            mb: 3,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: 'inherit',
          }}
        >
          {article.content}
        </Typography>
      </>
    )
  }

  const commentSection = () => {
    return (
      <>
        <FormControl>

          <FormLabel>
            <Grid container lg={12} direction="row" justifyContent='space-between'>
              Comment
              <Box component='div' sx={{ display: 'flex' }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <Button sx={{
                  color: 'black',
                  display: 'block',
                  fontSize: 11,
                  backgroundColor: '#F7D633',
                  letterSpacing: '.3rem',
                  "&:hover": {
                    backgroundColor: "black",
                    fontSize: 12,
                    color: '#F7D633',
                    cursor: 'pointer'
                  }
                }} variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>

            </Grid>
          </FormLabel>
          <TextField
            id="name-input"
            name="comment"
            label="Comment"
            type="text"
            sx={{ display: 'flex', my: 2, mb: 8, minWidth: '280px' }}
            value={comment}
            onChange={handleInputChange}
          />

        </FormControl>
      </>
    )
  }
  return (
    <Grid container lg={12} direction='column' sx={{ px: 5, maxWidth: "1600px" }}>
      {infoSection()}
      {contentSection()}
      {commentSection()}
    </Grid>
  )
}

export default PostPage