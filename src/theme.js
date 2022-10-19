import { createTheme, responsiveFontSizes  } from '@mui/material/styles'

let theme = createTheme({
    palette: {
        primary: {
            main: '#F7D633',
        },
        secondary: {
            main: '#232323',
        },
    },
    typography: {
        fontFamily: [
            "Satisfy",
            "Pacifico",
            'sans-serif',
            '-apple-system',
        ].join(','),
        button : {
            fontFamily: "Pacifico",
            
        }
    },
});
// theme = responsiveFontSizes(theme)
export default theme = responsiveFontSizes(theme);