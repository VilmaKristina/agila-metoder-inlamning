import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

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
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductProvider>
  );
}

export default App;
