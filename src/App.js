import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">Nav?</header>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
