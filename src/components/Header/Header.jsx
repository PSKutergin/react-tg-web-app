import s from './Header.module.css'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'

const Header = () => {
    const { user, onClose } = useTelegram()

    return (
        <header className={s.header}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={s.username}>
                {user?.username}
            </span>
        </header>
    )
}

export default Header