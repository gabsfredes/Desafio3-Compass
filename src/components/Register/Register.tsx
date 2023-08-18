import classes from "./Register.module.css";
import { mutationNewUser, checkUser, checkEmail } from "./Api";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getCookie } from "../cookieUtils";
import ErrorRegister from "./ErrorRegister";
import SuccessRegister from "./SuccessRegister";
import { useState } from "react";
interface Values {
  fullname: string;
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const Register: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenError, setIsModalOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const sessionToken = getCookie("sessionToken");

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Full Name must have at least 3 characters")
      .required("Full Name is required"),

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
    fullname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    checkUser(values).then((response) => {
      if (response.length > 0) {
        setErrorMessage("Username already exists");
        handleErrorRegisterModal();
      } else {
        checkEmail(values).then((response) => {
          if (response.length > 0) {
            setErrorMessage("Email already exists");
            handleErrorRegisterModal();
          } else {
            mutationNewUser(values).then((response) => {
              if (response) {
                handleRegisterModal();
              } else {
                setErrorMessage("Something went wrong, please contact us");
                handleErrorRegisterModal();
              }
            });
          }
        });
      }
    });
  };

  const handleRegisterModal = () => {
    setIsModalOpen(true);
  };

  const handleRegisterConfirm = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/login");
    }, 200);
  };

  const handleErrorRegisterModal = () => {
    setIsModalOpenError(true);
  };

  const handleErrorRegisterConfirm = () => {
    setIsModalOpenError(false);
    setTimeout(() => {
      navigate("/register");
    }, 200);
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
                  <label htmlFor="fullname" className={classes.field_name}>
                    Full Name
                  </label>
                  <Field
                    id="fullname"
                    name="fullname"
                    className={classes.input}
                    required
                  />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className={classes.register_error}
                  />
                </div>

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
        <SuccessRegister
          isOpen={isModalOpen}
          onConfirm={handleRegisterConfirm}
        />
        <ErrorRegister
          isOpen={isModalOpenError}
          onConfirm={handleErrorRegisterConfirm}
        >
          {errorMessage}
        </ErrorRegister>
      </section>
    </>
  );
};

export default Register;
