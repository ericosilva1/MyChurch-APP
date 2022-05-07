import React, { useState } from "react";
import apiUtils from "../utils/api.utils";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "./Navbar";

const theme = createTheme();
const ages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function RoomForm() {
  const [name, setName] = useState("");
  const [minAge, setMinAge] = useState(ages[0]);
  const [maxAge, setMaxAge] = useState(ages[11]);

  const navigate = useNavigate();

  const resetForm = () => {
    setMinAge(ages[0]);
    setMaxAge(ages[11]);
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiUtils.addRoom({ maxAge, minAge, name });
      resetForm();
      navigate("/private/rooms");
    } catch (error) {
      console.log(error.status);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <HomeOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Room
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  required
                  fullWidth
                  id="minAge"
                  name="minAge"
                  value={minAge}
                  onChange={(e, newMinAge) => {
                    setMinAge(e.target.value);
                    setMinAge(newMinAge);
                  }}
                  options={ages}
                  renderInput={(params) => (
                    <TextField {...params} label="Min Age" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  required
                  fullWidth
                  id="maxAge"
                  name="maxAge"
                  value={maxAge}
                  onChange={(e, newMaxAge) => {
                    setMaxAge(e.target.value);
                    setMaxAge(newMaxAge);
                  }}
                  options={ages}
                  renderInput={(params) => (
                    <TextField {...params} label="Max Age" />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
