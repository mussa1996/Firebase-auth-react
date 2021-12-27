import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route,BrowserRouter } from "react-router-dom"
import Routers from '../router/Routes'


function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>  

      <Router>
          <AuthProvider>
            
             <Routers />
           
          </AuthProvider>
        </Router>
    </div>
    </Container>
  )
}

export default App
