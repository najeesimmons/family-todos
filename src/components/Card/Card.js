import style from "./Card.module.css";

// function Card(props) {
const Card = (props) => {
  return <div className={style.card}>{props.children}</div>;
}

export default Card;