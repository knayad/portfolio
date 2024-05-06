import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavbarComp from "./components/NavbarComp";
// import ModalComponent from "./components/ModalComponent";

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
      <NavbarComp />
      <br />
      <br />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Home />} />
          <Route path="portfolio/reviews" element={<Reviews />} />
          <Route path="portfolio/repos" element={<Repos />} />
          <Route path="portfolio/about" element={<About />} />
          <Route path="portfolio/hire" element={<HireMe />} />
          <Route path="*" element={<NotFound />} />
          {/* 
          <body>
            <br />
          </body> */}
        </Routes>
      </BrowserRouter>
      {/* <ModalComponent /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
