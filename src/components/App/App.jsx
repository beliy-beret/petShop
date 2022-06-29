import style from './app.module.css';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';

const App = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <section className={style.App}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.productList}>
        {productList.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            taste={item.taste}
            servings={item.serving}
            mouse={item.mouse}
            weight={item.weight}
            status={item.status}
            available={item.available}
          />
        ))}
      </div>
    </section>
  );
};

export default App;
