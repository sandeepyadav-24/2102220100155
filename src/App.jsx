import MainPage from "./components/MainPage";
import ParticularPage from "./components/ParticularPage";
import Navbar from "./components/Navbar";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<ParticularPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
