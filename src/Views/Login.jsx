
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? <LoginForm /> : <RegisterForm />}
      <button onClick={toggleForm}>
        Switch to {isLoginForm ? 'Register' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
