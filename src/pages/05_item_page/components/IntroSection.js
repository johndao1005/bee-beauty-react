import { Typography } from '@mui/material'
import React from 'react'

function IntroSection({item}) {
    const date = item?.createdAt?.substring(0, 10)
    const brandDetails = item?.brand?.data?.attributes
    const brand = () =>{
      if (!brandDetails) {
        return <></>
      }
      else {
        return (
          <Typography
          variant="subTitle"
          color="secondary"
          sx={{
            my: 1,
          }}>
          Brand: {brandDetails.name}
        </Typography>
        )
      }
    }
    return (
      <>
        <Typography
          variant="title"
          color="secondary"
          sx={{
            mt: 3,
          }}>
          {item.name}
        </Typography>
        {brand()}
        <Typography
          variant="h4"
          color="secondary"
          sx={{
            my: 1,
          }}>
          Posted: {date}
        </Typography>
      </>
  )
}

export default IntroSection