import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Member from "./Components/Members/index";
import NotFound from "./Components/404/index";
import Scroll from "./Scroll";
function App() {
  return (
    <Router>
      <div className="App">
        <Scroll />
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="member/:id" element={<Member />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
