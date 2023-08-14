import bagIcon from "../../images/bag.svg";
import classes from "./Bag.module.css";

const Bag: React.FC = () => {
  return (
    <div className="bag">
      <img src={bagIcon} className={classes.bag} alt="Bag Icon" />
    </div>
  );
};

export default Bag;
