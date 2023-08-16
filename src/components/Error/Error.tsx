import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error: React.FC = () => {
  return (
    <section id={classes.error_page}>
      <h1>Error 404</h1>
      <h2>This page doesn't exist or the URL is incorrect 😥</h2>
      <h2>Go <Link to='/'>back home</Link> and try again!</h2>
    </section>
  );
};

export default Error;
