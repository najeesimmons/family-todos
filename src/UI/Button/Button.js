import styles from "./Button.module.css"

const Button = props => {

  // let className = "props.green ? styles["green-button"] : styles["red-button"]";
  let color = props.green ? styles.green : props.red ? styles.red : null;

  return (
      <button type={props.type || 'button'} className={`${styles.button} ${color}`} onClick={props.onClick}>
      {/* <button type={props.type || 'button'} className={[color, styles.button]} Click={props.onClick}> */}
        {props.children}
      </button>
    );
  };


  export default Button;
   