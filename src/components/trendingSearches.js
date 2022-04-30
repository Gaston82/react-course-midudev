import { useEffect, useState } from "react";
import getTrendingTerms from "../services/getTrendingTermsService";
import Category from "./category";

export default function TrendingSerches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);
  return <Category options={trends} name="Tendencias" />;
}
