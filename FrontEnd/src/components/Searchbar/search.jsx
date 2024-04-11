import react, { useState } from "react";
import "./search.css";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  const [busca, setBusca] = useState("");
  const [dados, setDados] = useState([]);

  const pegarBusca = (event) => {
    setBusca(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(``);
      const data = await response.json();
      setDados(data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  return (
    <div className="container">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={busca}
          onChange={pegarBusca}
          className="search"
          type="text"
          placeholder="Pesquise músicas,álbuns,artistas e podcasts"
        />
        <button
          className="search-btn"
          id="search-btn"
          type="submit"
        >
          <IoIosSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
}
