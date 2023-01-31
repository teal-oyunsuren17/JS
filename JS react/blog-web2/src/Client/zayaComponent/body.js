import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { NavLink } from "react-router-dom";

export function BodyZaya() {
  const [angilal, setAngilal] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 1000);
  function loadAngilal(query = "") {
    axios.get(`http://localhost:8080/angilal?q=${query}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setAngilal(data);
      } else {
        alert(`Aldaa garlaa ${status}`);
      }
    });
  }

  useEffect(() => {
    loadAngilal(searchedQuery);
  }, [searchedQuery]);

  useEffect(() => {
    loadAngilal();
  }, []);
  return (
    <div
      className="clientBody d-flex flex-column align-items-center justify-content-center"
      style={{ width: "100%", height: "40rem" }}
    >
      <div>
        <input
          type={"search"}
          placeholder={"Search..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <BiSearch />
        </button>
      </div>
      <div style={{ background: "#D5D5D5" }}>
        {angilal.map((p) => (
          <NavLink key={p.id} to={"/angilal/" + p.slug}>
            <div>{p.title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
