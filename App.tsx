import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { CssBaseline, Container } from "@mui/material";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
}
