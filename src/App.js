import React, { useState } from "react";
import { Container, Grid, Button, Typography, Paper } from "@mui/material";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [token, setToken] = useState(null);
  const [view, setView] = useState("signin");

  if (!token) {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
          <Grid container spacing={2} justifyContent="center">
            {view === "signin" ? (
              <>
                <Grid item xs={12}>
                  <SignIn setToken={setToken} />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Don't have an account?{" "}
                    <Button color="primary" onClick={() => setView("signup")}>
                      Sign Up
                    </Button>
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <SignUp />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Button color="primary" onClick={() => setView("signin")}>
                      Sign In
                    </Button>
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </Container>
    );
  }

  return <Dashboard token={token} />;
};

export default App;
