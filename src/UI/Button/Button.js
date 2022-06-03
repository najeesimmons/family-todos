import styles from "./Button.module.css"

const Button = props => {

  let className = props.green ? styles["green-button"] : styles["red-button"];


  return (
      <button type={props.type || 'button'} className={className} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };


  export default Button;
   