
function ProductCard(props) {
  const { product } = props;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.color}</p>
    </div>
  )
};

export default ProductCard;