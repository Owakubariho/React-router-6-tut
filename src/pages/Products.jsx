import { Link } from 'react-router-dom';
import Data from './Data';
const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className='products'>
          {Data.map((product) => (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link
                style={{ textDecoration: 'none', color: 'grey' }}
                to={`/products/${product.id}`}
              >
                More info
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
