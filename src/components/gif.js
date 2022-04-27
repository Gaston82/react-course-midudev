import { Link } from "react-router-dom";

export default function Gif({ id, title, url }) {
  return (
    <div>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}
