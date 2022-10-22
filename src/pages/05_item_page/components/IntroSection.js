import { Typography } from '@mui/material'
import React from 'react'

function IntroSection({articleDetails}) {
    const date = articleDetails?.createdAt?.substring(0, 10)
    const authorDetails = articleDetails?.author?.data?.attributes
    return (
      <>
        <Typography
          variant="title"
          color="secondary"
          sx={{
            mt: 3,
          }}>
          {articleDetails.title}
        </Typography>
        <Typography
          variant="subTitle"
          color="secondary"
          sx={{
            my: 1,
          }}>
          By: {authorDetails.name}
        </Typography>
        <Typography
          variant="h4"
          color="secondary"
          sx={{
            my: 1,
          }}>
          {date}
        </Typography>
      </>
  )
}

export default IntroSection