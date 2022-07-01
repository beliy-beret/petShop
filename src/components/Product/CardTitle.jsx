import style from './product.module.css';

const CardTitle = ({ isVisited }) => {
  const getHoverTitle = () => {
    if (isVisited) {
      return (
        <div className={style.cardTitleHover} style={{ display: 'block' }}>
          Котэ не одобряет?
        </div>
      );
    } else {
      return <div className={style.cardTitleHover}>Котэ не одобряет?</div>;
    }
  };
  return (
    <>
      <div className={style.cardTitle}>Сказочное заморское яство</div>
      {getHoverTitle()}
    </>
  );
};

export default CardTitle;
