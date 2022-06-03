import style from './ConfirmModal.module.css'

const ConfirmModal = props => {

    const finalDelete = () => {
        props.onDeleteTodos(props.id)
    }
    return (
        <div>
        <div className={style.backdrop}>
            <div className={style.modal}>
            <header>
                <h1>{props.title}</h1>
            </header>
            <div>{props.message}</div>
            <footer>
                <button onClick={props.confirmDelete}></button>
                <button onClick={finalDelete} id={props.id}></button>
            </footer>
            </div>
        </div>
        </div>
    )
}

export default ConfirmModal