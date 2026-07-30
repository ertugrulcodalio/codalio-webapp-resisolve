import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import TenantPortal from "./pages/TenantPortal";
import TenantDashboard from "./pages/TenantDashboard";
import TenantRequests from "./pages/TenantRequests";
import TenantRequestNew from "./pages/TenantRequestNew";
import TenantRequestDetail from "./pages/TenantRequestDetail";
import StaffPortal from "./pages/StaffPortal";
import StaffDashboard from "./pages/StaffDashboard";
import StaffRequestDetail from "./pages/StaffRequestDetail";
import StaffTenants from "./pages/StaffTenants";
import StaffProperties from "./pages/StaffProperties";
import StaffCategories from "./pages/StaffCategories";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/tenant" element={<TenantPortal />} />
      <Route path="/tenant/dashboard" element={<TenantDashboard />} />
      <Route path="/tenant/requests" element={<TenantRequests />} />
      <Route path="/tenant/requests/new" element={<TenantRequestNew />} />
      <Route path="/tenant/requests/:id" element={<TenantRequestDetail />} />
      <Route path="/staff" element={<StaffPortal />} />
      <Route path="/staff/dashboard" element={<StaffDashboard />} />
      <Route path="/staff/requests/:id" element={<StaffRequestDetail />} />
      <Route path="/staff/tenants" element={<StaffTenants />} />
      <Route path="/staff/properties" element={<StaffProperties />} />
      <Route path="/staff/categories" element={<StaffCategories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;