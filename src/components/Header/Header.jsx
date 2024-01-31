import s from './Header.module.css'
import Button from '../Button/Button'

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close()
    }

    return (
        <header className={s.header}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={s.username}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </header>
    )
}

export default Header