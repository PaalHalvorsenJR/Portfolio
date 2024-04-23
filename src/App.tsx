import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FirstPage from "./firstPage";
import AboutMe from "./pages/aboutMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
