import { Box, Grid, ImageList, } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Item from './Item';

export default function ItemList({ data, itemType }) {
    const navigate = useNavigate()
    const items = data?.data
    if (!items || items.length === 0) {
        return <></>
    }

    const handleClick = (item, i) => {
        navigate(`/${itemType.toLowerCase()}/${i}`, { state:  item })
    }

    return (
        <ImageList sx={{ height: 450, maxWidth: 1000, width: '100%' }} cols={2} gap={1}>
            {items.map((item, i) => {
                // console.log(item)
                return (
                    <Grid key={i} item lg={6} sx={{ width: '50%', px:2 }}>
                        <Box component="a" onClick={() => {
                            handleClick(item, i)
                        }}>
                            <Item data={item} />
                        </Box>
                    </Grid>
                )
            })}
        </ImageList>
    )
}
