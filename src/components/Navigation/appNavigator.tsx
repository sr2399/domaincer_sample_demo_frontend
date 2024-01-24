import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LayoutScreen from "./layout/SampleLayout/sampleLayout";


const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#ffb300',
		},
	},
});

const Navbar = (props: any) => {

  return (
    <ThemeProvider theme={theme}>
      <LayoutScreen />
    </ThemeProvider>
  )

}


export default Navbar

