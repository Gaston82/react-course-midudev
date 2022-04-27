import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListOfGifs from "./components/listOfGifs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gif/:keyword" element={<ListOfGifs />} />
      </Routes>
    </div>
  );
}

export default App;
