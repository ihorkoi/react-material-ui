import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image_test from "../img/peakpx5.jpg";
import { Link as RouterLink } from "react-router-dom";
import { signIn } from "../components/redux/operations";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const isEmailCorrect = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const submitController = (evt) => {
    const data = new FormData(evt.currentTarget);
    const req = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(signIn(req));
    evt.preventDefault();
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(rgba(25,23,23, 1), rgba(25,23,23, 0.7))",
      }}
    >
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${image_test})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: { xs: "-210px", sm: "center" },
          background: "linear-gradient()",
          boxShadow: "0 0 15px 10px rgba(25, 23, 23,1) inset",
        }}
      >
        <Box
          sx={{
            p: "24px 16px",
            backgroundColor: "rgba(255,255,255, 0.5)",
            borderRadius: "25px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "19px", lineHeight: "1.2" }}>
              Welcome to
            </Typography>
            <Typography
              component="h1"
              sx={{ fontSize: "32px", lineHeight: "1", fontWeight: "bold" }}
            >
              PowerPulse
            </Typography>
            <Typography sx={{ fontSize: "14px", lineHeight: "1.2" }}>
              Plan your workout time with us
            </Typography>
          </Box>
          {/* <FormControl defaultValue="" required> */}
          <Container
            component="form"
            maxWidth="xs"
            onSubmit={submitController}
            autocomplete="off"
          >
            <TextField
              id="email"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              label="Email"
              fullWidth
              size="small"
              autoComplete="off"
            ></TextField>
            <TextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              label="Password"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            ></TextField>
            <Button variant="contained" fullWidth type="submit">
              Sign In
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              sx={{ textTransform: "none", fontSize: 12 }}
            >
              Don't have an account yet? SignUp
            </Button>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
export default SignIn;
