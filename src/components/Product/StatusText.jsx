import style from './product.module.css';

const StatusText = ({ status, taste, available, onChangeStatus }) => {
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

  const defaultStatus = (
    <div className={style.buy}>
      Чего сидишь? Порадуй котэ, <span onClick={onChangeStatus}>купи.</span>
    </div>
  );

  const disabledStatus = (
    <div className={style.notAvailable}>Печалька, {taste} закончился.</div>
  );

  const checkedStatus = <div className={style.buy}>{checkText}</div>;

  const getStatusText = () => {
    if (available === 0) {
      return disabledStatus;
    } else if (status) {
      return checkedStatus;
    } else {
      return defaultStatus;
    }
  };

  return getStatusText();
};

export default StatusText;
