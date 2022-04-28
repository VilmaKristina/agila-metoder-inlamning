import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./components/Context";

function App() {
  
  return (
    <ProductProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductProvider>
  );
}

export default App;
