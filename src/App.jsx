import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog-detail/:id" element={<BlogDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
