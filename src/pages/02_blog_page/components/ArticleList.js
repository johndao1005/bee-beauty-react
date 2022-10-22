import { Box, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Article from './Article'

export default function ArticleList({ data }) {
    const navigate = useNavigate()
    const articles = data?.data
    if (!articles || articles.length === 0) {
        //TODO setup a no article component
        return <></>
    }

    const handleClick = (article, i) => {
        navigate(`/article/${i}`, { state:  article })
    }

    //TODO apply pagatation
    return (
        <Grid xl={12} item container>
            {articles.map((article, i) => {
                return (
                    <Grid key={i} item lg={6} sx={{ width: '50%' }}>
                        <Box component="a" onClick={() => {
                            handleClick(article, i)
                        }}>
                            <Article data={article} />
                        </Box>
                    </Grid>
                )
            })}
        </Grid>
    )
}
