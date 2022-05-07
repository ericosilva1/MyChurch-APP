import React, { useState } from "react";
import apiUtils from "../utils/api.utils";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "./Navbar";

const theme = createTheme();
const genders = ["", "Male", "Female"];
const ages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function ChildForm() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(genders[0]);

  const navigate = useNavigate();

  const resetForm = () => {
    setAge("");
    setGender("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiUtils.addChild({ age, gender, name });
      resetForm();
      navigate("/private/user");
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
            <ChildCareOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Child
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
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e, newAge) => {
                    setAge(e.target.value);
                    setAge(newAge);
                  }}
                  options={ages}
                  renderInput={(params) => (
                    <TextField {...params} label="Child's Age" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  required
                  fullWidth
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e, newGender) => {
                    setGender(e.target.value);
                    setGender(newGender);
                  }}
                  options={genders}
                  renderInput={(params) => (
                    <TextField {...params} label="Gender" />
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
