import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Products() {
  const navigate = useNavigate()
  const [state, setState] = useState({ products: [] })

  useEffect(() => {
    fetch(`${BACKEND_URL}/products`)
    .then(response => response.json())
    .then(data => {
      setState({ products: data })
    })
  },[]);

  return (
    <div>
      <h1>Produtos</h1>
      <button onClick={() => navigate('/create-product')}>Adicionat produtos</button>
      <div>
        {state.products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

    </div>
  )
}

export default Products