import { Link } from "react-router-dom";
import ListOfGifs from "../components/listOfGifs";
import SearchForm from "../components/searchForm";
import TrendingSerches from "../components/trendingSearches";
import useGifs from "../hooks/useGifs";

const POPULAR_GIFS = ["Rambo", "Gandhi", "Pity", "Fight"];

export default function Home() {
  //Averiguar la diferencia con el useLocation
  const { loading, gifs } = useGifs();

  return (
    <>
      <header>
        <h1>Giffy</h1>
      </header>
      <SearchForm />
      <h3>Ultima Búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3> Los Gifs más populares</h3>
      {/* <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul> */}
      <TrendingSerches />
    </>
  );
}
