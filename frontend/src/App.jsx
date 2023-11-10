import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
    // <div>
    //   <Navbar />
    //   <div>
    //     <div className="container">
    //       <Banner />
    //     </div>
    //   </div>

    //   <div className="bg-bg-secondary">
    //     <div className="container">
    //       <Benefits />
    //     </div>
    //   </div>

    //   <div>
    //     <div className="container">
    //       <Features />
    //     </div>
    //   </div>

    //   <div className="bg-bg-secondary">
    //     <div className="container">
    //       <Reviews />
    //     </div>
    //   </div>

    //   <div>
    //     <div className="container">
    //       <Form />
    //     </div>
    //   </div>

    //   <div className="bg-bg-secondary">
    //     <div className="container">
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
