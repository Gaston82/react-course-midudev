import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  // const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "maradona";
    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      if (keyword) localStorage.setItem("lastKeyword", keyword);
      setLoading(false);
    });
  }, [keyword, setGifs, rating]);

  return { loading, gifs };
}
