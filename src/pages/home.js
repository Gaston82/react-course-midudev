import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const POPULAR_GIFS = ["Rambo", "Gandhi", "Pity", "Fight"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  //Averiguar la diferencia con el useLocation
  let navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${keyword}`);
    console.log(keyword);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} />
      </form>
      <h3> Los Gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
