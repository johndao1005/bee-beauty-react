import React, { useState } from "react";
import {
    Grid,
    TextField,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Button,
} from '@mui/material'
import { DatePicker } from "@mui/x-date-pickers";

const defaultValues = {
    name: "",
    email: "",
    date: "",
    topic: "Consultant",
    message: "",
};

function BookingForm() {
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
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justifyContent="center" direction="column" rowGap={3} sx={{mr:2}}>
                <FormControl>
                    <FormLabel>Contact form</FormLabel>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        sx={{ display: 'flex', minWidth: '280px', maxWidth: '600px' }}
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        id="email-input"
                        name="email"
                        label="Email"
                        type="email"
                        sx={{ display: 'flex', minWidth: '280px' }}
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl>
                    <DatePicker
                        label="Pick a Date"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField sx={{ display: 'flex', minWidth: '280px' }} {...params} />}
                    />
                </FormControl>
                <FormControl>
                    <Select
                        name="topic"
                        value={formValues.topic}
                        onChange={handleInputChange}
                        sx={{ display: 'flex', minWidth: '280px' }}
                    >
                        <MenuItem key="consultant" value="Consultant">
                            Consultant
                        </MenuItem>
                        <MenuItem key="promotion" value="Promotion">
                            Promotion
                        </MenuItem>
                        <MenuItem key="training " value="Training">
                            Training
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <TextField
                        id="message-input"
                        name="message"
                        label="Message"
                        type="text"
                        multiline
                        rows={4}
                        sx={{ display: 'flex', minWidth: '280px', height: '200%' }}
                        value={formValues.message}
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

export default BookingForm