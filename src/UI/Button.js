// import { icons } from "react-icons"
import { AiFillPlusCircle } from 'react-icons/ai'
import styles from "./Button.module.css"

const Button = props => {
    return (
      <button type={props.type} className={styles.button} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };
  
  export default Button;
  