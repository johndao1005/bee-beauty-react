import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getStrapiMedia } from '../../../ultis/api'

function Hero({ data }) {
  const { picture, content, title } = data
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
            minWidth: '250px', my: '50px', width: '100%', maxWidth: "550px", px: 2
          }}
          src={url}
        />
      </Grid>
    )
  }

  const description = () => {
    if (!content || !title) {
      return <></>
    }
    return (
      <Grid item container xs={12} sm={6}
        alignContent="center" justifyContent='center' direction='column'  >
        <Typography
          color='#232323'
          variant="title"
          align='center'
          sx={{
            ml: 3,
            my: 3,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="content"
          sx={{
            ml: 3,
            mb: 3,
          }}
        >
          {content}
        </Typography>
      </Grid>
    )
  }

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Grid container direction="row" sx={{ pt: 1, px: 2, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
      {image()}
      {description()}
    </Grid>
  )
}

export default Hero