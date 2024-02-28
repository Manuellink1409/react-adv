import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../assets/react.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              {/*El componente NavLink te permite obtener el isActive*/}
              {/*para poder aplicarle estilos al link activo*/}
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          {/*Esto es para que cualquier otra ruta la marque como Not Found*/}
          {/* <Route path="/*" element={<h1>Not Found</h1>} />  */}

          {/*Esto es para que cualquier otra ruta redirija a /home*/}
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
