/* Root file 
  Contains the router logic. (react-router-dom version 6 hence why Routes component is used instead of Switch)
  A "universal" route captures everything that is not setup prior and shoots the 404 error page.
  This includes the error redirect set in the Housing page. As the error route is not specifically parameter, the
  universal catches it up.
*/
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
