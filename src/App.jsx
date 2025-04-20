import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/navbar/Menu.jsx";
import AppRoutes from "../src/routes/AppRoutes.jsx";

function App() {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Router>
        <Menu />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
