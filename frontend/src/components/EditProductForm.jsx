import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function AddProductForm(props) {
  const { product } = props;
  const navigate = useNavigate()
  const [state, setState] = useState({
    name: product.name || '',
    brand: product.brand || '',
    model: product.model || '',
    price: product.price || 0,
    color: product.color || '',
    isValidated: false
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  useEffect(() => {
    if (state.name.length > 0 && state.brand.length > 0 && state.model.length > 0 && state.price > 0 && state.color.length > 0) {
      setState({...state, isValidated: true});
    } else {
      setState({...state, isValidated: false});
    }
  }, [state.name, state.brand, state.model, state.price, state.color, state.isValidated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      name: state.name,
      brand: state.brand,
      model: state.model,
      price: state.price,
      color: state.color
    };
    fetch(`${BACKEND_URL}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/products');
    })
  };

  return (
    <form>
      <h3>Adicionar produto</h3>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" placeholder="Nome do produto" onChange={handleChange} value={state.name}/>
      <label htmlFor="brand">Marca</label>
      <input type="text" id="brand" name="brand" placeholder="Marca" onChange={handleChange} value={state.brand}/>
      <label htmlFor="model">Modelo</label>
      <input type="text" id="model" name="model" placeholder="Modelo" onChange={handleChange} value={state.model}/>
      <label htmlFor="price">Preço</label>
      <input type="number" id="price" name="price" placeholder="Preço" onChange={handleChange} value={state.price}/>
      <label htmlFor="color">Cor</label>
      <input type="text" id="color" name="color" placeholder="Cor" onChange={handleChange} value={state.color}/>
      <button type="button" disabled={!state.isValidated} onClick={handleSubmit}>Atualizar</button>
    </form>
  )
}

export default AddProductForm;