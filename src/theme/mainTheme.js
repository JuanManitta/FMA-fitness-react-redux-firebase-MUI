import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const mainTheme = createTheme({
    palette:{
        primary: {
            main: '#293B5F'
        },
        secondary:{
            main: '#256D85'
        },
        tercery: {
            main: '#DBE6FD'
        },
        error:{
            main: red.A400
        }
    }
})