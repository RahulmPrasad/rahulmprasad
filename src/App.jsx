import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageCity from "./pages/ManageCity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Manage City" element={<ManageCity/>} />
      </Routes>
    </Router>
  );
}

export default App;