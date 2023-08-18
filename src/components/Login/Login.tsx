import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { mutationLogin } from "./Api";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createSessionCookie, getCookie } from "../cookieUtils";
import SuccessLogin from "./SuccessLogin";
import { useState } from "react";

interface Values {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const sessionToken = getCookie("sessionToken");

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

  const handleSubmit = async ( 
    values: Values,
    actions: FormikHelpers<Values>
  ) => {
    const loginToken = await mutationLogin(values);
    createSessionCookie("sessionToken", loginToken, 7);
    handleLoginModal();
  };

  const handleLoginModal = () => {
    setIsModalOpen(true);
  };

  const handleLoginConfirm = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      <section id={classes.login_page}>
        <div className={classes.login_title}>Login</div>

        <div className={classes.login_content}>
          {(!sessionToken && (
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ isValid }) => (
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

                  <button
                    type="submit"
                    disabled={!isValid}
                    className="btn register"
                  >
                    Login
                  </button>
                  <span className={classes.already}>
                    Don't have and account? <Link to="/register">Register</Link>
                  </span>
                </Form>
              )}
            </Formik>
          )) || (
            <div className={classes.logged}>
              You are already logged in! Go back <Link to="/">home</Link>
            </div>
          )}
        </div>
        <SuccessLogin isOpen={isModalOpen} onConfirm={handleLoginConfirm} />
      </section>
    </>
  );
};

export default Login;
