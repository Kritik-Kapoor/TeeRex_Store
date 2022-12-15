import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
