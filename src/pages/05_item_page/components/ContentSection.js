import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getStrapiMedia } from '../../../ultis/api'

function ContentSection({ item }) {

    const image = () => {
        const imageDetails = item?.image?.data[0]
        if (!imageDetails || imageDetails === "") {
            return <></>
        }
        const url = getStrapiMedia(imageDetails)
        console.log(imageDetails)
        return (
            <Box
                component="img"
                alt={"blog image"}
                sx={{
                    minWidth: '250px', my: 2, mx: 3, width: "70%"
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
                align='left'
                sx={{
                    my: 3,
                }}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]} disallowedElements={['img', "iframe"]} >
                    {item.content}
                </ReactMarkdown>
            </Typography>
        </>
    )


}

export default ContentSection