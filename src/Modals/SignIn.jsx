import React, { useState } from "react";
import useStore from '../store/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../Modals/ModalBasic.module.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn({ setModalSignInOpen }: PropsType) {
  // 모달 끄기
  const closeSignInModal = () => {
    setModalSignInOpen(false);
  };

  const goToSignUp = () => {
    window.open('/signup', '_blank')
    closeSignInModal();
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // token을 decode하여 username을 비롯한 정보를 추출하는 함수
  function parseJwt (token) {
    return JSON.parse(atob(token.split('.')[1]).toString());
}

  // navigate 선언
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { is_login, setIsLogin } = useStore();

  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.clear(); // 로그인 실행 시, 브라우저 로컬저장소에 있는 값을 모두 날려 충돌 방지
      try {
        // .env를 바탕으로 backend 상대경로를 지정
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/accounts/token/`,
          {
            email: email,
            password: password,
          },
        )
        if (response) {
          localStorage.setItem('ACCESS_TOKEN', response.data.access); //access token을 local storage에 저장
          console.log('로그인 성공!');
          setIsLogin(true);
          let tokeninfo = parseJwt(response.data.access);
          console.log("username:", tokeninfo.username);
          localStorage.setItem("USERNAME", tokeninfo.username)
          closeSignInModal(); // mddal
        }
      } catch (error) {
        console.log("Authentication failed", error);  // response를 못받아 error를 띄울 경우 콘솔에 에러 띄우기
      }
    };


  return (
    <div className={styles.modalbox}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={closeSignInModal}>
              X
            </button>
            <ThemeProvider theme={defaultTheme}>
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
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="email"
              />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="password"
              />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item>
                        <button onClick={goToSignUp} variant="body2">
                          {"Don't have an account? Sign Up"}
                        </button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </div>
        </div>
  );
}
