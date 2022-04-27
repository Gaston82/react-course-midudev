import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Detail from "./pages/detail";
import Home from "./pages/home";
import SearchResult from "./pages/searchResult";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:keyword" element={<SearchResult />} />
        <Route path="/gif/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
