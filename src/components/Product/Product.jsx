import style from './product.module.css';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/productSlice';

const Product = ({ id, taste, servings, mouse, weight, status, available }) => {
  const dispatch = useDispatch();
  const onChangeStatus = () => dispatch(changeStatus(id));

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

  let checkText = '';
  switch (taste) {
    case 'с фуа-гра':
      checkText = 'Печень утки разварная с артишоками.';
      break;
    case 'с рыбой':
      checkText = 'Головы щучьи с чесноком да свежайшая сёмгушка';
      break;
    case 'с курой':
      checkText = 'Филе из цыплят с трюфелями в бульоне.';
      break;
    default:
      break;
  }

  return (
    <article className={style.product}>
      <input type={'checkbox'} onChange={onChangeStatus} checked={status} />
      <div className={style.wrapper} onClick={onChangeStatus}>
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
      {status ? (
        <div className={style.buy}>{checkText}</div>
      ) : (
        <div className={style.buy}>
          Чего сидишь? Порадуй котэ, <span onClick={onChangeStatus}>купи.</span>
        </div>
      )}
    </article>
  );
};

export default Product;
