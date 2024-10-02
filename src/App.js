import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [token, setToken] = useState(null);
  const [view, setView] = useState("signin");

  if (!token) {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: "2rem", marginTop: "2rem" }}>
          <Stack spacing={2} alignItems="center">
            {view === "signin" ? (
              <>
                <SignIn setToken={setToken} />
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Button color="primary" onClick={() => setView("signup")}>
                    Sign Up
                  </Button>
                </Typography>
              </>
            ) : (
              <>
                <SignUp />
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Button color="primary" onClick={() => setView("signin")}>
                    Sign In
                  </Button>
                </Typography>
              </>
            )}
          </Stack>
        </Paper>
      </Container>
    );
  }

  return <Dashboard token={token} />;
};

export default App;
