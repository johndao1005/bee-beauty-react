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
                variant="h4"
                align="center"
                color="primary"
                sx={{
                  pb:1,
                  textAlign: 'center'
                }}
              >
                {specialty.title}
              </Typography>
              <Typography
                variant="content"
                color="primary"
                sx={{
                  px: 5,
                  pb: 5,
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
      <Grid container alignContent="center" justifyContent="center" sx={{width : "100%", backgroundColor: "#232323"}}>
      <Typography
        variant="header"
        color="primary"
        align="center"
        sx={{
          ml: 3,
          mb: 3,
          py:2
        }}
        children={"Specialty"}
        />
        </Grid>
    )
  }
  return (
    <>
      {title()}
      <Grid item container direction='row' sx={{  px: 3, backgroundColor: "#232323", minHeight: "190px" }}>
        {featureList()}
      </Grid>
    </>
  )
}

export default Feature