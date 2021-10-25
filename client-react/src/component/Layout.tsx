import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import CssBaseline from "@mui/material/CssBaseline";

interface Props {}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WorkSchedule
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </LocalizationProvider>
  );
};
