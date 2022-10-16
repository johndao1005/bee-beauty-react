import React, { useState } from "react";
import {
    Grid,
    TextField,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Button,
    Typography,
} from '@mui/material'
import { Container } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";

const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
};

const BookingPage = () => {
    /* ---------------------------------- STATE --------------------------------- */
    const [formValues, setFormValues] = useState(defaultValues);
    const [value, setValue] = useState(null)
    /* -------------------------------- FUNCTION -------------------------------- */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    /* -------------------------------- COMPONENT ------------------------------- */

    const form = () => {
        return (
            <form onSubmit={handleSubmit}>
                <Grid lg={12} container alignItems="center" justifyContent="center" direction="column" rowGap={3}>
                    <Typography
                        variant="h1"
                        sx={{
                            ml: 3,
                            mt: 3,
                            fontSize: 20,
                            fontFamily: 'monospace',
                            fontWeight: 1000,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        Make a booking
                    </Typography>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            sx={{ display: 'flex', mb: 2, minWidth: '280px' }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            sx={{ display: 'flex', minWidth: '280px' }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            sx={{ display: 'flex', minWidth: '280px' }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl>
                        {/* TODO change to datepicker */}
                        <FormLabel>Date</FormLabel>
                        <DatePicker
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField sx={{ display: 'flex', minWidth: '280px' }} {...params} />}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Topic</FormLabel>
                        <Select
                            name="os"
                            value={formValues.os}
                            onChange={handleInputChange}
                            sx={{ display: 'flex', minWidth: '280px' }}
                        >
                            <MenuItem key="mac" value="mac">
                                Mac
                            </MenuItem>
                            <MenuItem key="windows" value="windows">
                                Windows
                            </MenuItem>
                            <MenuItem key="linux " value="linux">
                                Linux
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        {/* TODO make dragable for long text */}
                        <FormLabel>Message</FormLabel>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            sx={{ display: 'flex', minWidth: '280px' }}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <Button sx={{
                        mx: 'auto',
                        px: 2,
                        color: 'black',
                        display: 'block',
                        fontSize: 11,
                        backgroundColor: '#F7D633',
                        letterSpacing: '.3rem',
                        "&:hover": {
                            backgroundColor: "black",
                            fontSize: 12,
                            color: '#F7D633',
                            cursor: 'pointer'
                        }
                    }} variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        )
    }
    /* --------------------------------- RENDER --------------------------------- */
    return (
        <Container maxWidth="xl" sx={{ my: 3 }}>
            {form()}
        </Container>
    );
};

export default BookingPage