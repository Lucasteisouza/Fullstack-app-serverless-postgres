import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Header />
      <LoginForm />
      <Link to="/register">Cadastre-se</Link>
      <Footer />
    </>
  );
}

export default Login;