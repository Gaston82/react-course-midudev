import { Link } from "react-router-dom";

export default function Gif({ id, title, url }) {
  return (
    <div>
      <Link to={`/gif/${id}`}>
        <img src={url} alt={title} />
        <h4>{title}</h4>
      </Link>
    </div>
  );
}
