import styles from "./HomeNavbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logoHome.png";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";


const HomeNavbar = () => {

  const navegar = useNavigate()

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt={"logo"} className={styles.logoImg} />
        </Link>
      </div>
      <div className={styles.middle}>
        <h1>INOVAMED</h1>
        {/*     <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/paciente">Paciente</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul> */}
      </div>
      <div className={styles.logout} onClick={() => navegar('/')}>
          <IoIosLogOut />
      </div>
    </div>
  );
};

export default HomeNavbar;
