import s from './Button.module.css'

const Button = (props) => {

    return (
        <button {...props} className={s.button} />
    )
}

export default Button