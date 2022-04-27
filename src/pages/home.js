import { Link } from "react-router-dom";

const POPULAR_GIFS = ["Rambo", "Gandhi", "Pity", "Fight"];

export default function Home() {
  return (
    <>
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
