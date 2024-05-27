import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../shared/hooks";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import * as yup from "yup";
import logo from "../../img/LOGO.png"

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

export const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  const [isLoading, setIsLoading] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then((dadosValidados) =>
        login(dadosValidados.email, dadosValidados.password).then(() =>
          setIsLoading(false)
        )
      )
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach((error) => {
          if (error.path === "email") {
            setEmailError(error.message);
          } else if (error.path === "password") {
            setPasswordError(error.message);
          }
        });
      });
  };

  return !isAuthenticated ? (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgcolor="#ffff"
    >
      <Card
        sx={{
          display: "flex",
          width: "55%",
          height: "70%",
          borderRadius: "16px",
          boxShadow: 10,
        }}
      >
        <CardContent
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Typography
            variant="body2"
            color="error"
            align="center"
            gutterBottom
          >
            {passwordError || emailError ? "Usuário ou senha incorretos" : ""}
          </Typography>

          <TextField
            fullWidth
            label="Matrícula"
            type="email"
            value={email}
            disabled={isLoading}
            error={!!emailError}
            helperText={emailError}
            onKeyDown={() => setEmailError("")}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Senha"
            type="password"
            value={password}
            disabled={isLoading}
            error={!!passwordError}
            helperText={passwordError}
            onKeyDown={() => setPasswordError("")}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          <Link to="/" style={{ alignSelf: "center", marginTop: "0.5rem" }}>
            Esqueci minha Senha
          </Link>

          <Button
            variant="contained"
            fullWidth
            disabled={isLoading}
            onClick={handleSubmit}
            sx={{
              marginTop: "1rem",
              backgroundColor: "#004d40",
              "&:hover": { backgroundColor: "#00332c" },
            }}
            endIcon={
              isLoading ? (
                <CircularProgress
                  variant="indeterminate"
                  color="inherit"
                  size={20}
                />
              ) : undefined
            }
          >
            Entrar
          </Button>
        </CardContent>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#e1ece1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100px",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
            <img
            src={logo}
            alt="Logo"
            style={{
              maxWidth: "90%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    </Box>
  ) : undefined;
};
