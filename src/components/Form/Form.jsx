import { useCallback, useEffect, useState } from 'react';
import s from './Form.module.css'
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <>
            <h3>Введите ваши данные</h3>
            <form className={s.form}>
                <input
                    className={s.input}
                    type="text"
                    placeholder={'Страна'}
                    value={country}
                    onChange={onChangeCountry}
                />
                <input
                    className={s.input}
                    type="text"
                    placeholder={'Улица'}
                    value={street}
                    onChange={onChangeStreet}
                />
                <select value={subject} onChange={onChangeSubject} className={s.select}>
                    <option value={'physical'}>Физ. лицо</option>
                    <option value={'legal'}>Юр. лицо</option>
                </select>
            </form>
        </>
    )
}

export default Form