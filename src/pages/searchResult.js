import { useParams } from "react-router-dom";
import ListOfGifs from "../components/listOfGifs";
import useGifs from "../hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = useParams();
  let { gifs } = useGifs({ keyword });

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
      <ListOfGifs gifs={gifs} />
    </>
  );
}
