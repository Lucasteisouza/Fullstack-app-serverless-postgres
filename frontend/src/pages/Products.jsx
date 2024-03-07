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

    </div>
  )
}

export default Products