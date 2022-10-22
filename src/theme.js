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
            "Urbanist",
            "Gotu",
            'sans-serif',
            '-apple-system',
        ].join(','),
        fontSize: 17,
        button : {
            fontFamily: "Urbanist",
        },
        h4 :{
            fontSize: 22,
            fontFamily: 'Urbanist',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: '#F7D633',
            textDecoration: 'none',
        }, 
        title :{
            fontSize: 35,
            fontFamily: 'Gotu',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: '#F7D633',
        },
        subTitle :{
            fontSize: 30,
            fontFamily: 'Gotu',
            fontWeight: 200,
            letterSpacing: '.1rem',
            color: '#F7D633',
        },
        content :{
            fontSize: 20,
            fontWeight: 300,
            fontFamily: 'Gotu',
            letterSpacing: '.1rem',
            textAlign: 'center'
        },
        header :{
            fontSize: 40,
            fontFamily: 'Urbanist',
            fontWeight: 200,
            letterSpacing: '.2rem',
            color: '#F7D633',
        },
    },
});
// theme = responsiveFontSizes(theme)
export default theme = responsiveFontSizes(theme);