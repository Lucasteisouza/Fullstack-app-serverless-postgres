import Header from '../components/Header'
import Footer from '../components/Footer'

function ProductDetails() {

  const handleRemoveProduct = () => {

  };

  return (
    <>
      <Header />
      {/* <h2>{product.name}</h2>
      <p>{product.brand}</p>
      <p>{product.model}</p>
      <p>{product.price}</p>
      <p>{product.color}</p> */}
      <button type='button' >Remover produto</button>
      <Footer />
    </>
  )
}

export default ProductDetails