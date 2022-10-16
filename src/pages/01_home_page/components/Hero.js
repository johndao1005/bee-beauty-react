import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getStrapiMedia } from '../../../ultis/api'

function Hero({ data, navigate }) {
  const { button, picture, content } = data
  /* -------------------------------- COMPONENT ------------------------------- */
  const image = () => {
    if (!picture) {
      return <></>
    }
    const url = getStrapiMedia(picture)
    return (
      <Grid xs={12} sm={6} item>
        <Box
          component="img"
          alt="Hero picture"
          sx={{
            minWidth: '250px', mx: 'auto', my: '50px', width: '100%'
          }}
          src={url}
        />
      </Grid>
    )
  }

  const description = () => {
    if (!content || !button) {
      return <></>
    }
    return (
      <Grid item container xs={12} sm={6}
        alignContent="center" justifyContent='center' direction='column'  >
        <Typography
          variant="h6"
          sx={{
            ml: 3,
            mb: 3,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          {content}
        </Typography>
        <Button
          onClick={() => navigate(button.link)}
          sx={{
            mx: 'auto',
            px: 2,
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
          }}>
          {button.text}
        </Button>
      </Grid>
    )
  }
  
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Grid container direction="row" sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
      {image()}
      {description()}
    </Grid>
  )
}

export default Hero