import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1444,
            xl: 1536,
        },
    },
    shape: {
        borderRadius: 25
    },
});