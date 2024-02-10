import p1 from '../images/product-1.jpg'
import p2 from '../images/product-2.jpg'
import p3 from '../images/product-3.jpg'
import p4 from '../images/product-4.jpg'
import p5 from '../images/product-5.jpg'
import p6 from '../images/product-6.jpg'
import p7 from '../images/product-7.jpg'
import p8 from '../images/product-8.jpg'
import p9 from '../images/product-9.jpg'


const productsData = [
  { id: 1, name: 'premium glasses', image: p1, price: 20.00, discountedPrice: 25.00 },
  { id: 2, name: 'premium glasses', image: p2, price: 19.00, discountedPrice: 25.00 },
  { id: 3, name: 'premium glasses', image: p3, price: 21.00, discountedPrice: 25.00 },
  { id: 4, name: 'premium glasses', image: p4, price: 22.00, discountedPrice: 25.00 },
  { id: 5, name: 'premium glasses', image: p5, price: 23.00, discountedPrice: 25.00 },
  { id: 6, name: 'premium glasses', image: p6, price: 24.00, discountedPrice: 25.00 },
  { id: 7, name: 'premium glasses', image: p7, price: 25.00, discountedPrice: 25.00 },
];
const Product = ({ product }) => (
  <div className="box">
    <div className="image">
      <div className="icons">
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-share"></a>
        <a href="#" className="fas fa-eye"></a>
      </div>
      <img src={product.image} alt="" />
    </div>
    <div className="content">
      <h3>{product.name}</h3>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
      <div className="price">${product.price} <span>${product.discountedPrice}</span></div>
    </div>
  </div>
);


const Products = () => {
  return (
    <>
      <section className="heading">
        <h1>our products</h1>
        <p>
          {" "}
          <a href="/">home</a> {">"}
          {">"} products{" "}
        </p>
      </section>
      <section className="products">
    <h1 className="title"> featured products </h1>
    <div className="box-container">
      {productsData.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </section>
    </>
  );
};

export default Products;
