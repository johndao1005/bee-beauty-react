import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { getStrapiMedia } from '../../../ultis/api'

function ContentSection({ articleDetails }) {

    const image = () => {
        const imageDetails = articleDetails?.image?.data
        if (!imageDetails || imageDetails === "") {
            return <></>
        }
        const url = getStrapiMedia(imageDetails)
        return (
            <Box
                component="img"
                alt={"blog image"}
                sx={{
                    minWidth: '250px', my: 2, mx: 3, width: "80%"
                }}
                src={url}
            />
        )
    }

    return (
        <>
            <Grid container item justifyContent="center" direction="row">
                {image()}

            </Grid>
            {/* TODO look into react markdown  https://stackoverflow.com/questions/57050107/converting-markdown-text-into-react-components */}
            <Typography
                variant="content"
                sx={{
                    mb: 3,
                }}
            >
                {articleDetails.content}
            </Typography>
        </>
    )


}

export default ContentSection