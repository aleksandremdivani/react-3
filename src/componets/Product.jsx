const Product = ({ title, quantity, image }) => (
  <div>
    <h3>{title}</h3>
    <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
    </div>
  </div>
);

export default Product;
