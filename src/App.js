import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Detail from "./pages/detail";
import Home from "./pages/home";
import SearchResult from "./pages/searchResult";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <div className="App">
      <StaticContext.Provider value={{ name: "Gaston" }}>
        <GifsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword/:rating" element={<SearchResult />} />
            <Route path="/gif/:id" element={<Detail />} />
          </Routes>
        </GifsContextProvider>
      </StaticContext.Provider>
    </div>
  );
}

export default App;
