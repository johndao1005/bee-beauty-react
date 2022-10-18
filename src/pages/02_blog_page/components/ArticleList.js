import { Grid } from '@mui/material'
import React from 'react'
import Article from './Article'

export default function ArticleList({ data }) {
    const articles = data?.data
    if (!articles || articles.length === 0) {
        //TODO setup a no article component
        return <></>
    }
    //TODO apply pagatation
    return (
        <Grid xl={12} item container>
            {articles.map((article, i) => {
                return (
                    <Grid key={i} item lg={6} sx={{width: '50%'}}>
                        <Article data={article} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
