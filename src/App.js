import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HellowPage from "./pages/HellowPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage copy";
import UsersPage from "./pages/UsersPage";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:Id" element={<UserPage/>} />
        <Route path="/usuarios" element={<Navigate replace={false} to="/users"/>} />
        {/* si en to="   users" no se coloca oblicua se agrega,
         queda usuarios/users */}
        <Route path="/hola" element={<HellowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
