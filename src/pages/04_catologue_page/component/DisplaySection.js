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
                variant="h1"
                sx={{
                    ml: 3,
                    my: 3,
                    mt: 5,
                    fontSize: 50,
                    fontFamily: 'monospace',
                    fontWeight: 1000,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
        )
    }

    const descriptionSection = () => {
        return (
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
                {description}
            </Typography>
        )
    }

    return (
        <>
            {titleSection()}
            {descriptionSection()}
            <Grid container direction="row" alignContent='center' justifyContent='center' rowGap={3}>
                {/* <Filter handleFilterChange={handleFilterChange} filter={filter} /> */}
                <ItemList data={data} />
            </Grid>
        </>
    )
}
