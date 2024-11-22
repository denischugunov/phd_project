import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Main/Dashboard";
import Footer from "./components/Footer";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Spinner, Container } from "react-bootstrap";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Router>
      <div class="d-flex flex-column min-vh-100">
        {user && <AppNavbar user={user} />}
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
        {user && <Footer />}
      </div>
    </Router>
  );
};

export default App;
