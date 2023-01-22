import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./pageLogin.module.css";

 const PageLogin = () => {
  const navigate = useNavigate()
  const [Cpf, setCpf] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.divImg}>
        <img
          className={styles.img2}
          src="./images/inovaMed.png"
          alt="iconInova"
        />
      </div>
      <div className={styles.rigthArea}>
        <div className={styles.loginArea}>
          <h1>Login</h1>
          <div>
            <p>CPF</p>
            <input name="cpf" onChange={(e) => setCpf(e.target.value)} />
            <p>Senha</p>
            <input name="senha" type='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={() => navigate('/home')}>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default PageLogin