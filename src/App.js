import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
// import NavbarComp from "./components/NavbarComp";

//pages
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <div className="App">
      {/* <NavbarComp /> */}
      <br />
      <br />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Home />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="repos" element={<Repos />} />
          <Route path="about" element={<About />} />
          <Route path="hire" element={<HireMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
