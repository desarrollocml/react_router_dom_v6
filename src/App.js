import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
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
        {/* si replace esta en false no deja devolver a ruta anterior */}
        {/* si en to="   users" no se coloca oblicua se agrega,
         queda usuarios/users */}
        <Route path="/hola" element={<HellowPage />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome!</p>}/>
          <Route path="goodbye" element={<p>Goodbye!</p>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
