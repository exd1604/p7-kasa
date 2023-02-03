import "./utils/styles/globalStyle.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Housing from "./pages/Housing"
import Error from "./pages/Error"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes> 
      <Footer />     
    </Router>

  </React.StrictMode>
)
