import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Products() {
  const navigate = useNavigate()
  const [state, setState] = useState({ products: [], filteredProducts: [], search: ''})

  useEffect(() => {;
    fetch(`${BACKEND_URL}/products`)
    .then(response => response.json())
    .then(data => {
      setState({ ...state, products: data })
    })
  },[]);

  useEffect(() => {
    if (state.search === '') {
      setState({ ...state, filteredProducts: state.products })
    }
    const filteredProducts = state.products.filter(product => product.name.toLowerCase().includes(state.search.toLowerCase()));
    setState({ ...state, filteredProducts })
  }, [state.products, state.search]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  return (
    <>
      <h1>Produtos</h1>
      <input type="text" name="search" placeholder="Pesquisar" onChange={handleChange} />
      <button onClick={() => navigate('/add-product')}>Adicionar produtos</button>
      <div>
        {state.filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

    </>
  )
}

export default Products