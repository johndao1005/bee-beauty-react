import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { getStrapiMedia } from '../../../ultis/api'

function ShowCase({ data }) {
  const description = () => {
    if (!data || data.length === 0) {
      return <></>
    }
    return (
      <>
        {data.map((skill, i) => {
          return (
            <Grid item container direction='row' sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }} key={i} >
              <Grid xs={12} alignItems="center" justifyContent="center" item container >

              </Grid>
              <Grid xs={12} sm={6} alignItems="center" justifyContent="center" item container >
                <Box
                  component="img"
                  alt='picture'
                  src={getStrapiMedia(skill.picture)}
                  sx={{
                    minWidth: '240px', my: '50px', width: '80%'
                  }}
                />
              </Grid>
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
                  {skill.title}
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
                  {skill.content}
                </Typography>
              </Grid>
            </Grid>
          )
        })}

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
          fontSize: 34,
          fontFamily: 'monospace',
          fontWeight: 1000,
          letterSpacing: '.1rem',
          textDecoration: 'none',
          textAlign: 'center'
        }}
      >
        Hobby
      </Typography>
      {description()}
    </>
  )
}

export default ShowCase