import classes from "./Register.module.css";
import { fgetSchemas, mutationNewUser } from "./Api";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../cookieUtils";

interface Values {
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const Register: React.FC = () => {
  const sessionToken = getCookie("sessionToken");

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must have at least 3 characters")
      .required("Username is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is required"),

    cpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);

    mutationNewUser(values).then((response) => {
      console.log("User created successfully");
    });

    actions.setSubmitting(false);
  };

  return (
    <>
      <section id={classes.register_page}>
        <div className={classes.register_title}>Register</div>
        <div className={classes.register_subtitle}>
          Please Fill out form to Register!
        </div>

        <div className={classes.register_content}>
          {(!sessionToken && (
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <Form className={classes.register_form}>
                <div className={classes.input_content}>
                  <label htmlFor="username" className={classes.field_name}>
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    className={classes.input}
                    required
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className={classes.register_error}
                  />
                </div>

                <div className={classes.input_content}>
                  <label htmlFor="email" className={classes.field_name}>
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={classes.input}
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={classes.register_error}
                  />
                </div>

                <div className={classes.input_content}>
                  <label htmlFor="password" className={classes.field_name}>
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className={classes.input}
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={classes.register_error}
                  />
                </div>

                <div className={classes.input_content}>
                  <label htmlFor="cpassword" className={classes.field_name}>
                    Confirm Password
                  </label>
                  <Field
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    className={classes.input}
                    required
                  />
                  <ErrorMessage
                    name="cpassword"
                    component="div"
                    className={classes.register_error}
                  />
                </div>

                <button type="submit" className="btn register">
                  Register
                </button>
                <span className={classes.already}>
                  Yes i have an account? <Link to="/login">Login</Link>
                </span>
              </Form>
            </Formik>
          )) || (
            <div className={classes.logged}>
              You are already logged in! Go back <Link to="/">home</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Register;
