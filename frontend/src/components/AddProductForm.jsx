import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function AddProductForm() {
  const navigate = useNavigate()
  const [state, setState] = useState({ name:"", brand:"", model:"", price:"", color:"", isValidated: false});

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
    try {
      fetch(`${BACKEND_URL}/products`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/products')
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <h3>Adicionar produto</h3>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" placeholder="Nome do produto" onChange={handleChange} />
      <label htmlFor="brand">Marca</label>
      <input type="text" id="brand" name="brand" placeholder="Marca" onChange={handleChange}/>
      <label htmlFor="model">Modelo</label>
      <input type="text" id="model" name="model" placeholder="Modelo" onChange={handleChange}/>
      <label htmlFor="price">Preço</label>
      <input type="number" id="price" name="price" placeholder="Preço" onChange={handleChange}/>
      <label htmlFor="color">Cor</label>
      <input type="text" id="color" name="color" placeholder="Cor" onChange={handleChange}/>
      <button type="button" disabled={!state.isValidated} onClick={handleSubmit}>Adicionar</button>
    </form>
  )
}

export default AddProductForm;