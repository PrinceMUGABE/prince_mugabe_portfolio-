// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";  // Import Home component
import Footer from "./components/Footer";
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
