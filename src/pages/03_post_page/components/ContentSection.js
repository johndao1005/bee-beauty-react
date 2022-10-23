import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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
            <Grid container item justifyContent="left" direction="row">

                <Typography
                    variant="content"
                    align='left'

                    fontSize={14}
                    sx={{
                        my: 3,
                        width: "100%"
                    }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} disallowedElements={['img', "iframe"]} >
                        {articleDetails.content}
                    </ReactMarkdown>
                </Typography>
            </Grid>
        </>
    )


}

export default ContentSection