import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditProductForm from '../components/EditProductForm'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


function UpdateProduct() {

  const { id } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    fetch(`${BACKEND_URL}/products/${id}`)
    .then(response => response.json())
    .then(data => {
      setState({product: data })
    })
  }, []);

  return (
    <>
      <Header />
      {state.product ? <EditProductForm product={state.product}/>: <p>Carregando...</p>}
      <Footer />
    </>
  )
}

export default UpdateProduct