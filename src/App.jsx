import MainPage from "./components/MainPage";
import ParticularPage from "./components/ParticularPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ParticularPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
