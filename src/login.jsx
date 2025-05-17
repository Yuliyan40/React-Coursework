import React from "react";
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

const LogIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login");
  };

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
          height: "52vh",
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
          Влез
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Въведи име"
            fullWidth
            required
            autoFocus
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
            sx={{
              mb: 2,
              "& .MuiInputBase-input": { color: "white", fontSize: "2rem" },
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
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
