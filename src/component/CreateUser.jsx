import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  FormHelperText,
} from "@material-ui/core";
import RainbowText from "react-rainbow-text";
import logo from "../assets/Logo.PNG";
import "../styles/CreateUser.css";
export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.state = {
      hidden: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange =
      this.handleConfirmPasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  firstNamehandler = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  lastNamehandler = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  emailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ password: "" });
    this.setState({ confirmPassword: "" });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleConfirmPasswordChange(e) {
    this.setState({ confirmPassword: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
    if (this.props.confirmPassword) {
      this.setState({ confirmPassword: this.props.confirmPassword });
    }
  }
  render() {
    const gridStyle = {
      marginLeft: "30px ",
      fontFamily: "sans-serif",
    };
    const textStyle = {
      marginTop: "40px",
      marginBottom: "30px",
      width: "800px",
    };
    const buttonStyle = {
      marginLeft: "112px",
      marginTop: "10px",
    };
    const imageStyle = {
      marginTop: "130px",
    };
    const helpexTextStyle = {
      marginLeft: "20px",
      marginBottom: "10px",
    };
    return (
      <div>
        <Grid>
          <Paper elevation={10} className="paperStyle">
            <Grid container>
              <Grid item xs={8} style={gridStyle}>
                <item>
                  <Grid>
                    <h1>
                      <RainbowText lightness={0.5} saturation={1}>
                        FundooNotes
                      </RainbowText>
                    </h1>
                    <h4>Create A New Account</h4>
                  </Grid>
                  <Grid>
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <item>
                          <TextField
                            id="firstName"
                            type="text"
                            label="First Name"
                            variant="outlined"
                            size="small"
                            value={this.state.firstName}
                            onChange={this.firstNamehandler}
                          />
                        </item>
                      </Grid>
                      <Grid item xs={6}>
                        <item>
                          <TextField
                            id="lastName"
                            type="text"
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            value={this.state.lastName}
                            onChange={this.lastNamehandler}
                          />
                        </item>
                      </Grid>
                    </Grid>
                    <Grid style={textStyle}>
                      <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        size="small"
                        helperText="You can use letters, numbers"
                        style={{ width: 473 }}
                        value={this.state.email}
                        onChange={this.emailHandler}
                      />
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <item>
                          <TextField
                            id="password"
                            type={this.state.hidden ? "password" : "text"}
                            label="Password"
                            variant="outlined"
                            size="small"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                          />
                        </item>
                      </Grid>
                      <Grid item xs={6}>
                        <item>
                          <TextField
                            id="confirmPassword"
                            type={this.state.hidden ? "password" : "text"}
                            label="Confirm"
                            variant="outlined"
                            size="small"
                            value={this.state.confirmPassword}
                            onChange={this.handleConfirmPasswordChange}
                          />
                        </item>
                      </Grid>
                      <FormHelperText style={helpexTextStyle}>
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </FormHelperText>
                    </Grid>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onClick={this.toggleShow}
                          name="checked"
                          color="primary"
                        />
                      }
                      label="Show password"
                    />
                  </Grid>
                  <Grid container spacing={10}>
                    <Grid item xs={6}>
                      <item>
                        <h4>
                          <Link href="/" style={textStyle}>
                            Sign in instead
                          </Link>
                        </h4>
                      </item>
                    </Grid>
                    <Grid item xs={6}>
                      <item>
                        <Button
                          type="submit"
                          value="Submit"
                          color="primary"
                          variant="contained"
                          style={buttonStyle}
                          onClick={this.handleSubmit}
                        >
                          Next
                        </Button>
                      </item>
                    </Grid>
                  </Grid>
                </item>
              </Grid>
              <Grid item xs={3} style={imageStyle}>
                <item>
                  <img src={logo} alt="Loading" />
                </item>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}
