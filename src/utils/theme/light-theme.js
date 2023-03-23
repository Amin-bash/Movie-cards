import {
    createTheme
} from "@mui/material/styles";
export const theme = createTheme({
    palette: {
        divider: "#E6E8F0",
        primary: {
            main: "#293c52",
            // main: "#808AB9",
            light: "#D3CDDB",
            dark: "#CACACC",
            contrastText: "#FFFFFF",
        }
    },
    typography: {
        fontFamily: ["Poppins", "Tajawal"].join(","),
    }
});
