import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';

function App() {

  return (
    <Routes>
      <Route exact path='/' element= {<Navigate to='/login'/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element= { <ProductDetails /> } />
      <Route path='/products/:id/edit' element= { <UpdateProduct /> } />
      <Route path='/register' element={<Register />} />
      <Route path='/add-product' element= {<AddProduct />} />
    </Routes>
  )
}

export default App;
