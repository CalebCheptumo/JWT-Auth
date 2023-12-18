
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../src/components/login";
import { Home } from "../src/components/home";
import { Navigation } from "../src/components/navigation";
import { Logout } from "../src/components/logout";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
