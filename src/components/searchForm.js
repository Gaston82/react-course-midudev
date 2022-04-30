import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    console.log(keyword);
  };

  const handleSubmit = () => {
    //navegar a otra ruta
    navigate(`/search/${keyword}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </>
  );
}
