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
                    minWidth: '240px', my: 1, width: "100%"
                  }}
                />
              </Grid>
              <Grid item container xs={12} sm={6}
                alignContent="center" justifyContent='center' direction='column'  >
                <Typography
                  variant="subTitle"
                  align="center"
                  color="secondary"
                  sx={{
                    pb: 1,
                    textAlign: 'center'
                  }}
                >
                  {skill.title}
                </Typography>
                <Typography
                  variant="content"
                  sx={{
                    px: 1,
                    pb: 1,
                    ml: 4
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
      <Grid container alignContent="center" justifyContent="center" sx={{ width: "100%", pt: 2 }}>
        <Typography
          variant="header"
          color="primary"
          align="center"
          sx={{
            ml: 3,
            mb: 3,
            pt: 2,
            color: "#232323"
          }}
          children={"Hobbies"}
        />
      </Grid>
      {description()}
    </>
  )
}

export default ShowCase