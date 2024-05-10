import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components
// import NavbarComp from "./components/NavbarComp";

//pages
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <NavbarComp /> */}
      <br />
      <br />
      <br />
      <br />
      <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
