import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";
import EventDetails from "../Pages/EventDetails";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFoundPage";
import ProtectedRoute from "../hooks/ProtectiveRoute";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
