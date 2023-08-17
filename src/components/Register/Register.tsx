import classes from "./Register.module.css";
import { fgetSchemas } from "./Api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  // useEffect(() => {
  //   fgetSchemas()
  //     .then((fetchedSchemas) => {
  //       console.log(fetchedSchemas);
  //     })
  //     .catch((error) => {
  //       console.error("Error effect:", error);
  //     });
  // }, []);

  return (
    <>
      <section id={classes.register_page}>
        <div className={classes.register_title}>Register</div>
        <div className={classes.register_subtitle}>
          Please Fill out form to Register!
        </div>
        <div className={classes.register_content}>
          <form className={classes.register_form}>
            <div className={classes.input_content}>
              <span className={classes.field_name}>Username</span>
              <input type="text" />
            </div>

            <div className={classes.input_content}>
              <span className={classes.field_name}>Email</span>
              <input type="text" />
            </div>

            <div className={classes.input_content}>
              <span className={classes.field_name}>Password</span>
              <input type="password" />
            </div>

            <div className={classes.input_content}>
              <span className={classes.field_name}>Confirm Password</span>
              <input type="password" />
            </div>

            <button className="btn register">Register</button>

            <span className={classes.already}>
              Yes i have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
