import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            desktop: 1366,
            hiRes: 1920,
        }
    },
})