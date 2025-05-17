import React, { useState } from "react";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { styled } from "@mui/material/styles";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const [emailError, setEmailError] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailSymbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailSymbols.test(formData.email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    try {
      const res = await axios.post("http://localhost:5000/users", formData);
      console.log("Успешна регистрация:", res.data);
      alert("Регистрацията е успешна!");
    } catch (error) {
      console.error("Грешка при регистрация:", error);
      alert("Възникна грешка при регистрацията ;(");
    }
  };

  const CustomTextField = styled(TextField)({
    "& .MuiFormHelperText-root": {
      color: "#e67219",
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginTop: "0.5rem",
      lineHeight: "2rem",
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={10}
        sx={{
          marginTop: 8,
          padding: 2,
          bgcolor: "#8a0606",
          fontSize: 12,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "60vh",
        }}
      >
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "grey",
            textAlign: "center",
            mb: 1,
            width: 70,
            height: 70,
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 45 }} />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", textShadow: "2px 2px grey", fontSize: 35 }}
        >
          Регистрирай се
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Въведи име"
            fullWidth
            required
            autoFocus
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              mb: 2,
              "& .MuiInputBase-input": { color: "white", fontSize: "2rem" },
            }}
          />
          <CustomTextField
            placeholder="Въведи имейл"
            fullWidth
            required
            autoFocus
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={emailError}
            helperText={emailError ? "Невалиден имейл адрес" : ""}
            sx={{
              mb: 2,
              "& .MuiInputBase-input": { color: "white", fontSize: "2rem" },
            }}
          />
          <TextField
            placeholder="Въведи парола"
            fullWidth
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={{
              mb: 2,
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "2rem",
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Запомни ме"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "1.5rem",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1, fontSize: "1.6rem" }}
          >
            Регистрирай се
          </Button>
        </Box>
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid>
            <Link component={RouterLink} to="/login">
              Имаш профил? Влез оттук!
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
