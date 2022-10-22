import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Filter from './Filter'
import ItemList from './ItemList'

export default function DisplaySection({ title, description, data }) {

    const [filter, setFilter] = useState("mac")

    const handleFilterChange = (e) => {
        e.preventDefault()
        setFilter(e.target)
    }

    const titleSection = () => {
        return (
            <Typography
                variant="header"
                color="secondary"
                align="center"
                sx={{
                    ml: 3,
                    my: 3,
                    mt: 5,
                }}
            >
                {title}
            </Typography>
        )
    }

    const descriptionSection = () => {
        return (
            <Typography
                variant="content"
                color="secondary"
                align="center"
                sx={{
                    ml: 3,
                    mb: 3,
                    px: 5,
                }}
            >
                {description}
            </Typography>
        )
    }

    return (
        <>
            {titleSection()}
            {descriptionSection()}
            <Grid container direction="row" alignContent='center' justifyContent='center' rowGap={2}>
                {/* <Filter handleFilterChange={handleFilterChange} filter={filter} /> */}
                <ItemList itemType={title} data={data} />
            </Grid>
        </>
    )
}
