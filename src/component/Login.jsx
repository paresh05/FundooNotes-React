import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUserSchema } from "./Validation";
import userConnect from "../service/RegistrationApi";
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
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  onSubmit(values, props) {
    let data={
      email:values.email,
      password:values.password,
    }
    console.log(data);
    userConnect.login(data).then((response)=>{
      alert(
        `Logged In Successfully !!!!`
      );
      console.log(response.data);
      props.resetForm();
    })
    .catch((e)=>{
      alert(
        ` Registration Failed !!!!`
      );
      console.log(e);
    })
    console.log(values);
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
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
    const initialValues = {
      email: "",
      password: "",
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
              <Grid>
                <Formik
                  initialValues={initialValues}
                  validationSchema={loginUserSchema}
                  onSubmit={this.onSubmit}>
                  {(props) => (
                    <Form>
                      <Grid align="center">
                        <Grid style={textStyle}>
                          <Field as={TextField}
                            id="email"
                            label="Email"
                            variant="outlined"
                            style={{ width: 330 }}
                            value={this.state.email}
                            error={
                              props.errors.email &&
                              props.touched.email
                            }
                            helperText={<ErrorMessage name="email" />}
                            autoFocus
                          />
                        </Grid>
                        <Field as={TextField}
                          id="password"
                          type={this.state.hidden ? "password" : "text"}
                          label="Password"
                          variant="outlined"
                          style={{ width: 330 }}
                          value={this.state.password}
                          error={
                            props.errors.password &&
                            props.touched.password
                          }
                          helperText={<ErrorMessage name="password" />}
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
                              <Link href="/createAccount">Create Account</Link>
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
                            >
                              Sign In
                            </Button>
                          </item>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}
