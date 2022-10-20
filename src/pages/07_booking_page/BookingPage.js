import React from "react";
import {
    Divider,
    Grid,
    Typography,
} from '@mui/material'
import BookingForm from "./components/BookingForm";
import ContactDetails from "./components/ContactDetails";

const BookingPage = () => {

    /* -------------------------------- COMPONENT ------------------------------- */

    const title = () =>{
        return (
            <Typography
                align="center"
                variant="title"
                sx={{
                    mt: 3,
                    width: "100%",
                    color: 'inherit',
                    mb: 3
                }}>
                Let talk somemore
            </Typography>
        )
    }
    const form = () => {
        return (
            <Grid item container lg={12} direction="row"  justifyContent="center" columnGap={3}>
                {/* <Grid item xs={12} sm={5} xl={5} > */}
                    <BookingForm />
                {/* </Grid>
                <Grid item xs={12} sm={5} xl={5} >
                    <ContactDetails />
                </Grid> */}
            </Grid>

        )
    }
    /* --------------------------------- RENDER --------------------------------- */
    return (
        <Grid item container sx={{ my: 4 }} direction="column" alignItems="center" justifyContent="center">
            {title()}
            {form()}
        </Grid>
    );
};

export default BookingPage