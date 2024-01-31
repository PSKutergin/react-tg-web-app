import s from './ProductItem.module.css'
import Button from "../Button/Button";

const ProductItem = ({ product, className, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={`${s.product} ${className}`}>
            <div className={s.img} />
            <div className={s.title}>{product.title}</div>
            <div className={s.description}>{product.description}</div>
            <div className={s.price}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={s.add_btn} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;