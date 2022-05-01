import { Link } from "react-router-dom";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption, index) => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`}>{singleOption}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
