import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./gif";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map((image) => (
    <Gif title={image.title} url={image.url} key={image.id} />
  ));
}
