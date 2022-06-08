import styles from "./Button.module.css";

const getColor = (props) => {
  if (props.green) {
    return styles.green;
  } else if (props.red) {
    return styles.red;
  }
  return null;
};

const Button = ({ type = "button", onClick, children, ...rest }) => {
  // let className = "props.green ? styles["green-button"] : styles["red-button"]";
  // let color = props.green ? styles.green : props.red ? styles.red : null;

  const color = getColor(rest);
  return (
    <button
      type={type}
      className={`${styles.button} ${color}`}
      onClick={onClick}
    >
      {/* <button type={props.type || 'button'} className={[color, styles.button]} Click={props.onClick}> */}
      {children}
    </button>
  );
};

export default Button;
