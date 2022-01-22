import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HolaPage from "./pages/HolaPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/hola" element={<HolaPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
