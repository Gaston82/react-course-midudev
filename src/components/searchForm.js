import { useState } from "react";

export default function SearchForm({ pepe }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pepe({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
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
        <button>Search</button>
      </form>
    </>
  );
}
