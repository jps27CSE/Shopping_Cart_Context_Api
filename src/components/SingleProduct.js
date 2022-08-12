const SingleProduct = ({ prod }) => {
  //   const { cart, setCart } = CartState();

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      <button className="add">Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
