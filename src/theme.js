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
        },
        h4 :{
            fontSize: 22,
            fontFamily: 'Pacifico',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: '#F7D633',
            textDecoration: 'none',
        }, 
        title :{
            fontSize: 35,
            fontFamily: 'Pacifico',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: '#F7D633',
        },
        content :{
            fontSize: 22,
            fontWeight: 300,
            fontFamily: 'Satisfy',
            letterSpacing: '.1rem',
            textAlign: 'center'
        },
        
    },
});
// theme = responsiveFontSizes(theme)
export default theme = responsiveFontSizes(theme);