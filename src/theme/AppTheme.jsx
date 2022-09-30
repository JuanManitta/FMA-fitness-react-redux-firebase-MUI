import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { mainTheme } from "./mainTheme"


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ mainTheme }>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
