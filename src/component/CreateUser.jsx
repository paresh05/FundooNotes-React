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
import { createUserSchema } from "./Validation";
import logo from "../assets/Logo.PNG";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  onSubmit(values, props) {
    alert(
      `${values.firstName} ${values.lastName}  Registered Successfully !!!!`
    );
    console.log(values);
    props.resetForm();
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
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
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
                    <Formik
                      initialValues={initialValues}
                      validationSchema={createUserSchema}
                      onSubmit={this.onSubmit}
                    >
                      {(props) => (
                        <Form>
                          <Grid container spacing={0}>
                            <Grid item xs={6}>
                              <item>
                                <Field
                                  as={TextField}
                                  id="firstName"
                                  type="text"
                                  label="First Name"
                                  variant="outlined"
                                  size="small"
                                  value={this.state.firstName}
                                  error={
                                    props.errors.firstName &&
                                    props.touched.firstName
                                  }
                                  helperText={<ErrorMessage name="firstName" />}
                                  autoFocus
                                />
                              </item>
                            </Grid>
                            <Grid item xs={6}>
                              <item>
                                <Field
                                  as={TextField}
                                  id="lastName"
                                  type="text"
                                  label="Last Name"
                                  variant="outlined"
                                  size="small"
                                  value={this.state.lastName}
                                  error={
                                    props.errors.lastName &&
                                    props.touched.lastName
                                  }
                                  helperText={<ErrorMessage name="lastName" />}
                                />
                              </item>
                            </Grid>
                          </Grid>
                          <Grid style={textStyle}>
                            <Field
                              as={TextField}
                              id="email"
                              label="Email"
                              variant="outlined"
                              size="small"
                              style={{ width: 473 }}
                              value={this.state.email}
                              error={props.errors.email && props.touched.email}
                              helperText={<ErrorMessage name="email" />}
                            />
                            <FormHelperText style={helpexTextStyle}>
                              You can use letters, numbers
                            </FormHelperText>
                          </Grid>
                          <Grid container spacing={0}>
                            <Grid item xs={6}>
                              <item>
                                <Field
                                  as={TextField}
                                  id="password"
                                  type={this.state.hidden ? "password" : "text"}
                                  label="Password"
                                  variant="outlined"
                                  size="small"
                                  value={this.state.password}
                                  error={
                                    props.errors.password &&
                                    props.touched.password
                                  }
                                  helperText={<ErrorMessage name="password" />}
                                />
                              </item>
                            </Grid>
                            <Grid item xs={6}>
                              <item>
                                <Field
                                  as={TextField}
                                  id="confirmPassword"
                                  type={this.state.hidden ? "password" : "text"}
                                  label="Confirm"
                                  variant="outlined"
                                  size="small"
                                  value={this.state.confirmPassword}
                                  error={
                                    props.errors.confirmPassword &&
                                    props.touched.confirmPassword
                                  }
                                  helperText={
                                    <ErrorMessage name="confirmPassword" />
                                  }
                                />
                              </item>
                            </Grid>
                            <FormHelperText style={helpexTextStyle}>
                              Use 8 or more characters with a mix of letters,
                              numbers & symbols
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
                                >
                                  Next
                                </Button>
                              </item>
                            </Grid>
                          </Grid>
                        </Form>
                      )}
                    </Formik>
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
