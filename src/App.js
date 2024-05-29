import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ServiceList from "./components/ServiceList";
import AddService from "./components/AddService";
import ServiceDetail from "./components/ServiceDetail";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-service">Add Service</Link>
            </li>
            <li>
              <Link to="/service/:id">Get Service</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ServiceList />} />
          <Route path="/add-service" element={<AddService />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
