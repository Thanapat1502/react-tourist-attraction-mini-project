import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/trips/:tripEdit" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
