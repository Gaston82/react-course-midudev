import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import getGifs from "./services/getGifs";
import Gif from "./components/gif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs().then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section>
        {gifs.map((image) => (
          <Gif title={image.title} url={image.url} key={image.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
