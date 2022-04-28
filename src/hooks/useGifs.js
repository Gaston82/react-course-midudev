import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "maradona";
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      if (keyword) localStorage.setItem("lastKeyword", keyword);
      setLoading(false);
    });
  }, [keyword]);

  return { loading, gifs };
}
