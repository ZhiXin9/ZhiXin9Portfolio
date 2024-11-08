import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from './components/BackToTopButton';
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <div id="home"><Banner /></div>
                <div id="about"><About /></div>
                <div id="portfolio"><Portfolio /></div>
                <div id="contact"><Contact /></div>
              </>
            }
          />
          
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
