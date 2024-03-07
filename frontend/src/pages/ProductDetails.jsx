import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function ProductDetails() {

  const { id } = useParams();
  const [state, setState] = useState({ product: {} });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/products/${id}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    
    })
    .then(response => response.json())
    .then(data => {
      setState({ product: data })
    })
  }, [id]);

  const handleEditProduct = () => {
    navigate(`/products/${id}/edit`);
  };
  
  const handleRemoveProduct = () => {
    fetch(`${BACKEND_URL}/products/${id}`, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response);
    })

    navigate('/products');
  };

  return (
    <>
      <Header />
      <h2>Detalhes do produto</h2>
      <h3>{state.product.name}</h3>
      <p><strong>Marca: </strong> {state.product.brand}</p>
      <p><strong>Modelo: </strong>{state.product.model}</p>
      <p><strong>Cor: </strong>{state.product.color}</p>
      <p><strong>Preço: </strong>{`R$ ${state.product.price}`}</p>
      <button type='button' onClick={handleEditProduct}>Editar produto</button>
      <button type='button' onClick={handleRemoveProduct}>Remover produto</button>
      <Footer />
    </>
  )
}

export default ProductDetails