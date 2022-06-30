import style from './product.module.css';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/productSlice';
import StatusText from './StatusText';

const Product = ({ id, taste, servings, mouse, weight, status, available }) => {
  const dispatch = useDispatch();
  const onChangeStatus = () => dispatch(changeStatus(id));
  const alertUser = () => {
    return alert('Продукта нет в наличии');
  };

  let giftText = 'мышь в подарок';
  switch (mouse) {
    case 2:
      giftText = '2 мыши в подарок';
      break;
    case 5:
      giftText = '5 мышей в подарок заказчик доволен';
      break;
    default:
      break;
  }

  return (
    <article className={style.product}>
      <input type={'checkbox'} onChange={onChangeStatus} checked={status} />
      <div
        className={available === 0 ? style.disabled : style.wrapper}
        onClick={available === 0 ? alertUser : onChangeStatus}
      >
        <div className={style.cardTitle}>Сказочное заморское яство</div>
        <div className={style.cardTitleHover}>Котэ не одобряет?</div>
        <h1 className={style.title}>Нямушка</h1>
        <div className={style.subtitle}>
          <span>{taste}</span>
        </div>
        <div>
          <span>{servings}</span> порций
        </div>
        <div>
          <span className={style.gift}>{giftText}</span>
        </div>
        <div className={style.weight}>
          <span>{weight}</span>
          <span>кг</span>
        </div>
      </div>
      <StatusText
        status={status}
        taste={taste}
        available={available}
        onChangeStatus={onChangeStatus}
      />
    </article>
  );
};

export default Product;
