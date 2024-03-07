import { Link } from "react-router-dom";


function ProductCard(props) {
  const { product } = props;

  return (
    <Link to={`/products/${product.id}`}>
      <h2>{product.name}</h2>
      <p><strong>{`R$ ${product.price}`}</strong></p>
      <p>{product.color}</p>
    </Link>
  )
};

export default ProductCard;