import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function CTA({ data, navigate }) {
    const { content, button } = data
    /* -------------------------------- COMPONENT ------------------------------- */
    const newsLetter = () => {
        if (!content) {
            return <></>
        }
        return (
            <Grid item xs={7} md={8} container alignContent="center" justifyContent='center'>
                <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                        mb: 1,
                        fontSize: 15,
                        fontFamily: 'monospace',
                        fontWeight: 300,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {content}
                </Typography>
            </Grid>
        )
    }

    const buttons = () => {
        if (!button) {
            return <></>
        }
        return (
            <Grid item xs={5} md={4} container
                alignContent="center" justifyContent='center' direction='column' >
                {button.map(link => {
                    return (
                        <Button
                        key={link?.text}
                            onClick={() => navigate(link?.link)}
                            sx={{
                                mx: 'auto',
                                mb: 2,
                                px: 2,
                                display: 'block',
                                fontSize: 12,
                                backgroundColor: "#F7D633",
                                color: '#141414',
                                letterSpacing: '.3rem',
                                "&:hover": {
                                    backgroundColor: '#141414',
                                    fontSize: 13,
                                    color: '#F7D633',
                                    cursor: 'pointer'
                                }
                            }}>
                            {link?.text}
                        </Button>
                    )
                })}
            </Grid>
        )
    }
    /* --------------------------------- RENDER --------------------------------- */
    return (
        <Grid container direction="row" sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
            {newsLetter()}
            {buttons()}
        </Grid>
    )
}

export default CTA