import React from "react";
import styles from "./HomeBody.module.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import validaCPF from "../../../service/valida-cpf";
import { useNavigate } from "react-router-dom";

const HomeBody = ({dadosPacientes, setPacienteProcurado}) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const pacientes = dadosPacientes;
  const navigate = useNavigate()

  const buscar = () => {
    console.log(pacientes)
    let paciente = pacientes.filter((item) => validaCPF(item.cpf) === validaCPF(search))
    if (paciente.length === 1) {
      setPacienteProcurado(...paciente)
      navigate('/paciente')
    } else {
      setNotFound(true);
      setSearch("");
    }
  };

  const digitar = (e) => {
    if (notFound) {
      setNotFound(false);
    }
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(validaCPF(search))
    

  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSearch} className={styles.form}>
        <label>
          <input
            className={styles.input}
            type="text"
            name="search"
            value={search}
            onChange={(e) => digitar(e)}
            placeholder="Pesquisar..."
          />
        </label>
        <button className={styles.btnBuscar} onClick={buscar}>
          <BsSearch />
        </button>
        {notFound ? (
          <p className={styles.found}>Paciente não encontrado.</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default HomeBody;
