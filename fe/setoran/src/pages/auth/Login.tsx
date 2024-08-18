import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    IconButton,
    useTheme,
    createTheme,
    ThemeProvider,
    Switch,
  } from "@mui/material";
  import { LockOutlined, DarkMode, LightMode } from "@mui/icons-material";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { grey } from "@mui/material/colors";
  
  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [darkMode, setDarkMode] = useState(false);
  
    const handleRegister = async () => {
      // Logika register di sini
    };
  
    const theme = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
          main: darkMode ? grey[300] : "#000000",
        },
        background: {
          default: darkMode ? grey[900] : "#ffffff",
          paper: darkMode ? grey[800] : "#ffffff",
        },
        text: {
          primary: darkMode ? grey[300] : "#000000",
        },
      },
    });
  
    const handleToggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xs">
          <Box
            sx={{
              mt: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Toggle Dark/Light Mode */}
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
              }}
            >
              <IconButton onClick={handleToggleDarkMode} color="inherit">
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
              <Switch
                checked={darkMode}
                onChange={handleToggleDarkMode}
                color="default"
              />
            </Box>
  
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography variant="h5" fontWeight="bold">
              Register
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use School Account
            </Typography>
            <Box sx={{ mt: 3, width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "primary.main", color: "white" }}
                onClick={handleRegister}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Already have an account? Log In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  };
  
  export default Register;