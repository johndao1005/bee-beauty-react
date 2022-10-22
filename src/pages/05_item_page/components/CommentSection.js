import { Badge, Box, Button, FormControl, FormLabel, Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react'

import MailIcon from '@mui/icons-material/Mail';
function CommentSection( {articleDetails}) {

    const [comment, setComment] = useState("");
    const handleInputChange = (e) => {
        setComment(e.target.value)
    }
    return (
        <FormControl>

          <FormLabel>
            <Grid item container lg={12} direction="row" justifyContent='space-between'>
              Comment
              <Box component='div' sx={{ display: 'flex' }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={articleDetails.like} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <Button sx={{
                  color: 'black',
                  display: 'block',
                  mx: 2,
                  backgroundColor: '#F7D633',
                  letterSpacing: '.1rem',
                  "&:hover": {
                    backgroundColor: "black",
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
    )
}

export default CommentSection