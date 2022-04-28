import { useContext } from "react";
import { useParams } from "react-router-dom";
import Gif from "../components/gif";
import GifsContext from "../context/GifsContext";

export default function Detail() {
  let { id } = useParams();
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((singleGif) => singleGif.id === id);

  return <Gif {...gif} />;
}
