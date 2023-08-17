import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
interface Values {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username has at least 3 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password has at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <>
      <section id={classes.login_page}>
        <div className={classes.login_title}>Login</div>

        <div className={classes.login_content}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className={classes.login_form}>
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
                  className={classes.login_error}
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
                  className={classes.login_error}
                />
              </div>

              <button type="submit" className="btn register">
                Login
              </button>
              <span className={classes.already}>
              Don't have and account? <Link to="/register">Register</Link>
              </span>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Login;
