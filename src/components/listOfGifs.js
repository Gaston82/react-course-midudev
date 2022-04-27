import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getGifs from "../services/getGifs";
import Gif from "./gif";

export default function ListOfGifs() {
  let { keyword } = useParams();

  // const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map((image) => (
    <Gif title={image.title} url={image.url} key={image.id} />
  ));
}
