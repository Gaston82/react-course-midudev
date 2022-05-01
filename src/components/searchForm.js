import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [rating, setRating] = useState(RATINGS[0]);
  let navigate = useNavigate();

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    navigate(`/search/${keyword}/${rating}`);
  };

  const handleChangeRatings = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />

        <select onChange={handleChangeRatings} value={rating}>
          <option disabled>Rating Type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <button>Search</button>
      </form>
    </>
  );
}
