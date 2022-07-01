import style from './product.module.css';
import StatusText from './StatusText';
import { useState } from 'react';
import CardTitle from './CardTitle';

const Product = ({ taste, servings, mouse, weight, available }) => {
  const [isVisited, isVisitedHandle] = useState(false);
  const [isChecked, isCheckedHandle] = useState(false);
  const isCheckedToggle = () => isCheckedHandle(!isChecked);
  const isVisitedToggle = () => {
    if (isChecked) {
      isVisitedHandle(true);
    }
  };
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
      <input type={'checkbox'} onChange={isCheckedToggle} checked={isChecked} />
      <div
        className={available === 0 ? style.disabled : style.wrapper}
        onClick={available === 0 ? alertUser : isCheckedToggle}
        onMouseLeave={isVisitedToggle}
      >
        <CardTitle isVisited={isVisited} />
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
        isChecked={isChecked}
        taste={taste}
        available={available}
        isCheckedToggle={isCheckedToggle}
      />
    </article>
  );
};

export default Product;
