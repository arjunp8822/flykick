import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <div className="bg-bg-secondary">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
