import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function RegisterForm() {
  const [state, setState] = useState({ username:'', password:'', password2:'', email:'', name:'', isValidated: false});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  useEffect(() => {
    if (state.username.length > 5 && state.password.length > 5 && state.email.length > 5 && state.name.length > 5 && state.password === state.password2) {
      setState({ ...state, isValidated: true })
    } else {
      setState({ ...state, isValidated: false })
    }
  }, [state.username, state.password, state.email, state.name, state.password2, state.isValidated]);

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      fetch(`${BACKEND_URL}/login`, {
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
        navigate('/login');
      })
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  return (
    <form>
      <h3>Cadastrar novo usuário</h3>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} />
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" placeholder="Nome" onChange={handleChange}/>
      <label htmlFor="username">Nome de usuário</label>
      <input type="text" id="username" name="username" placeholder="Nome de usuário" onChange={handleChange} />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password" placeholder="Senha" onChange={handleChange} />
      <label htmlFor="password2">Insina a senha novamente</label>
      <input type="password" id="password2" name="password2" placeholder="Senha" onChange={handleChange} />
      <button disabled={!state.isValidated} type="button" onClick={handleSubmit}>Registrar</button>
    </form>
  )
}

export default RegisterForm;