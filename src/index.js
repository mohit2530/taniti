import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Attractions from "./Components/Attractions/Attractions";
import Entertainment from "./Components/Entertainment/Entertainment";
import Lodging from "./Components/Lodging/Lodging";
import Travel from "./Components/Travel/Travel";
import Eateries from "./Components/Eateries/Eateries";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F72AF",
      dark: "#112D4E",
    },
    secondary: {
      main: "#DBE2EF",
      light: "#F9F7F7",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 700,
      fontSize: "1.75rem",
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    h6: {
      fontFamily: "Nunito, sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body1: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/attractions",
    element: <Attractions />,
  },
  {
    path: "/entertainment",
    element: <Entertainment />,
  },
  {
    path: "/lodging",
    element: <Lodging />,
  },
  {
    path: "/travel",
    element: <Travel />,
  },
  {
    path: "/eateries",
    element: <Eateries />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router}>
      <CssBaseline />
      <App />
    </RouterProvider>
  </ThemeProvider>
);
