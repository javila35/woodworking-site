import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Contact, Pictures } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pictures" element={<Pictures />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
