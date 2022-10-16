import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const AboutPage =()=> {

  const heroPhoto = {
    description: "hero picture",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  }
  
  
  /* -------------------------------- COMPONENT ------------------------------- */
  const image = () => {
    return (
      <Grid xs={12} sm={6} alignItems="center" justifyContent="center" container >
        <Box
          component="img"
          alt={heroPhoto.description}
          src={heroPhoto.url}
          sx={{
            minWidth: '240px', my: '50px', width: '80%'
          }}
        />
      </Grid>
    )
  }

  const description = () => {
    return (
      <Grid item container xs={12} sm={6}
        alignContent="center" justifyContent='center' direction='column'  >
        <Typography
          variant="h1"
          sx={{
            ml: 3,
            mb: 3,
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
      </Grid>
    )
  }

  const intro = () => {
    return (
      <Grid container direction="row" sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
        {image()}
        {description()}
      </Grid>
    )
  }

  const feature = () => {
    return (
      <>
        <Typography
          variant="h1"
          sx={{
            ml: 3,
            mb: 3,
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
        <Grid container direction='row' sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
          <Grid lg={6} container item direction='column'>
            {description()}
            {description()}
          </Grid>
          <Grid lg={6} container item direction='column'>
            {description()}
            {description()}
          </Grid>
        </Grid>
      </>
    )
  }

  const skill1 = () => {
    return (
      <>
        <Typography
          variant="h1"
          sx={{
            ml: 3,
            mb: 3,
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
        <Grid container direction="row" sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
          {description()}
          {image()}
        </Grid>
      </>
    )
  }

  const showcase = () => {
    return (
    <Grid container direction="row" sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
      {image()}
      {description()}
    </Grid>
    )
  }




  /* --------------------------------- RENDER --------------------------------- */
  return (
    <>
      {intro()}
      {feature()}
      {showcase()}
    </>
  )
}

export default AboutPage