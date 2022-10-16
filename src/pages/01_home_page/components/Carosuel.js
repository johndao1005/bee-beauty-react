import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system';
import React, { useState } from 'react'
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { getStrapiMedia } from '../../../ultis/api';

var itemsList = [
    {
        name: "Random Name #1",
        description: "1 - Probably the most random thing you have ever seen!",
    },
    {
        name: "Random Name #2",
        description: "2- Hello World!"
    },
    {
        name: "Random Name #3",
        description: "3 - Hello World!"
    }
];

function Carosuel({data}) {
    const {pictures} =data
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState(itemsList)

    const handleChange = (cur) => {
        setIndex(cur);
    };

    const carousel = () => {
        const images = pictures?.data
        if(!images) {
            return <></>
        }
        return (
            <Container maxWidth='sm'>
                <Carousel
                    index={index}
                    onChange={handleChange}
                    interval={7000}
                    animation="slide"
                    indicators={false}
                    stopAutoPlayOnHover
                    swipe
                    className="my-carousel"
                    sx={{my:2, height: '350px'}}>
                   
                    {images.map((item, i) => {
                        return (
                        <Box
                            key={i}
                            component="img"
                            alt="picture"
                            sx={{
                                width: '100%',mx:'auto', height: '300px'
                            }}
                            src={getStrapiMedia(item)}
                        />
                    )
                    })}
                   
                </Carousel>
                <Grid
                container
                direction='row'
                justifyContent='center'>
                {images.map((item, i) => (
                    <FiberManualRecordIcon
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{ color: i === index ? "#F7D633" : "#fff", fontSize: 14, margin: 12 }}
                    />
                ))}
            </Grid>
            </Container>
        )
    }

    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: '#FEEDD9', display: 'block', pt: 3, pb: 2 }}>
            <Grid sx={{py: 2}} alignContent='center' justifyContent='center' container direction='column'>
                {carousel()}
            </Grid>
        </Container>
    )
}

export default Carosuel