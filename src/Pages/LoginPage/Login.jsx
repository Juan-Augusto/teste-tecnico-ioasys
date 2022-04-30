import axios from "axios";
import { Tooltip, Button } from "antd";
import { useState } from "react";
import "./LoginStyles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState();
  const [tooltipDisplay, setTooltipDisplay] = useState(false);
  const [error, setError] = useState();
  

  const signIn = async (e) => {
    e.preventDefault();
    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.name) {
          setUsername(res.data.name);  
          window.location.href = "/home";
          console.log(res.headers);
        } else {
          setError("Usuário ou senha incorretos");
        }
      });
  };

  return (
    <div className="login-container">
      <div
        style={{ disply: "flex", alignItems: "flex-start", padding: "16px" }}
      >
        <div className="header-login">  
            <h1 className="main-login-title">
            ioasys <span className='login-header-subtitle'>Books</span>
            </h1>
        </div>
        <div className="input-container">
          <h5>Email</h5>
          <input
            type="email"
            className="login-box"
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <h5 style={{ width: "50px" }}>Senha</h5>
          <input
            type="password"
            className="login-box"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button type="button" className="login-button" onClick={signIn}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
