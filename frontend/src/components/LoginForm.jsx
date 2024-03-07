import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()
  const [state, setState] = useState({ username:'', password:'', isValidated: false})
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (state.username.length > 5 && state.password.length > 5) {
      setState({ ...state, isValidated: true })
    } else {
      setState({ ...state, isValidated: false })
    }
  }, [state.username, state.password, state.isValidated])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    navigate('/products')
  }

  return (
    <form>
      <h3>Login</h3>
      <label htmlFor="username">Nome de usuário</label>
      <input type="text" id="username" name="username" placeholder="Nome de usuário" onChange={handleChange} />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password" placeholder="Senha" onChange={handleChange} />
      <button disabled={!state.isValidated} type="button" onClick={handleSubmit}>Entrar</button>
    </form>
  )
}

export default LoginForm