import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core";
import RainbowText from "react-rainbow-text";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.state = {
      hidden: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  emailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    alert(`Logged In Successfully !!!!`);
    console.log(this.state);
    this.setState({ email: "" });
    this.setState({ password: "" });
  }
  render() {
    const paperStyle = {
      padding: 20,
      height: "70%",
      width: 380,
      margin: "40px auto",
    };
    const headingStyle = {
      marginBottom: "30px",
      marginTop: "-15px",
    };
    const textStyle = {
      marginBottom: "30px",
    };
    const buttonStyle = {
      marginLeft: "10px",
      marginTop: "15px",
      marginBottom: "20px",
    };
    const linkStyle = {
      marginLeft: "28px",
    };
    const checkboxStyle = {
      marginTop: "7px",
      marginLeft: "14px",
    };
    const gridStyle = {
      fontFamily: "sans-serif",
    };
    return (
      <div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid style={gridStyle}>
              <Grid align="center" style={headingStyle}>
                <h2>
                  <RainbowText lightness={0.5} saturation={1}>
                    FundooNotes
                  </RainbowText>
                </h2>
                <h2>Sign In</h2>
              </Grid>
              <Grid align="center">
                <Grid style={textStyle}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    style={{ width: 330 }}
                    value={this.state.email}
                    onChange={this.emailHandler}
                  />
                </Grid>
                <TextField
                  id="password"
                  type={this.state.hidden ? "password" : "text"}
                  label="Password"
                  variant="outlined"
                  style={{ width: 330 }}
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </Grid>
              <Grid container>
                <Grid item xs={7}>
                  <item>
                    <FormControlLabel
                      style={checkboxStyle}
                      control={
                        <Checkbox
                          onClick={this.toggleShow}
                          name="checked"
                          color="primary"
                        />
                      }
                      label="Show password"
                    />
                  </item>
                </Grid>
                <Grid item xs={4} style={linkStyle}>
                  <item>
                    <h5>
                      <Link href="#">Forgot password?</Link>
                    </h5>
                  </item>
                </Grid>
              </Grid>
              <Grid container spacing={10}>
                <Grid item xs={6} style={linkStyle}>
                  <item>
                    <h4>
                      <Link href="/login">Create Account</Link>
                    </h4>
                  </item>
                </Grid>
                <Grid item xs={5} style={buttonStyle}>
                  <item>
                    <Button
                      type="submit"
                      value="Submit"
                      color="primary"
                      variant="contained"
                      onClick={this.handleSubmit}
                    >
                      Sign In
                    </Button>
                  </item>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}
