import { Grid, Typography } from '@mui/material'
import React from 'react'

function Feature({ data }) {

  const featureList = () => {
    if (!data) {
      return <></>
    }
    return (
      <>
        {data.map((specialty,i) => {
          return (
            <Grid key={i} md={4} item direction='column' container>
              <Typography
                variant="h3"
                sx={{
                  fontSize: 25,
                  fontFamily: 'monospace',
                  fontWeight: 1000,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {specialty.title}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  px: 5,
                  pb: 5,
                  fontSize: 20,
                  fontFamily: 'monospace',
                  fontWeight: 1000,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {specialty.description}
              </Typography>
            </Grid>
          )
        })}
      </>
    )
  }
  const title = () => {
    return (
      <Typography
        variant="h1"
        sx={{
          ml: 3,
          my: 3,
          fontSize: 34,
          fontFamily: 'monospace',
          fontWeight: 1000,
          letterSpacing: '.1rem',
          textDecoration: 'none',
          textAlign: 'center'
        }}
      >
        Specialty
      </Typography>
    )
  }
  return (
    <>
      {title()}
      <Grid item container direction='row' sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
        {featureList()}
      </Grid>
    </>
  )
}

export default Feature