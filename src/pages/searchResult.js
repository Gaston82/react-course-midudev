import { useParams } from "react-router-dom";
import ListOfGifs from "../components/listOfGifs";
import SearchForm from "../components/searchForm";
import useGifs from "../hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword, rating = "g" } = useParams();
  let { gifs, loading } = useGifs({ keyword, rating });

  /*
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);
*/
  return (
    <>
      <header>
        <h1>Giffy</h1>
      </header>
      <SearchForm />
      <h3>{keyword}</h3>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
