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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

const LogIn = ({ onLogin }) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const res = await axios.get("http://localhost:5000/users");

      const user = res.data.find(
        (us) =>
          us.name === credentials.name && us.password === credentials.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user)); // записва се влезналият потребител в конкретната сесия
        alert("Успешен вход!");
        if (onLogin) onLogin();
        navigate("/");
      } else {
        setError("Грешно име или парола :(");
      }
    } catch (err) {
      console.error(err);
      setError("Възникна грешка при влизането в акаунта");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={10}
        sx={{
          marginTop: 8,
          padding: 2,
          bgcolor: "#8a0606",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "52vh",
        }}
      >
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "grey",
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
          Влез
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Въведи име"
            fullWidth
            required
            name="name"
            value={credentials.name}
            onChange={handleChange}
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
            value={credentials.password}
            onChange={handleChange}
            sx={{
              mb: 2,
              "& .MuiInputBase-input": { color: "white", fontSize: "2rem" },
            }}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Запомни ме"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "1.5rem",
              },
            }}
          />
          {error && (
            <Typography color="error" sx={{ mb: 2, fontSize: "1.4rem" }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1, fontSize: "1.6rem" }}
          >
            Влез
          </Button>
        </Box>
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid>
            <Link component={RouterLink} to="/register">
              Нямаш профил? Регистрирай се оттук!
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LogIn;
