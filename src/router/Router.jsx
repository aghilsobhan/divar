import {  Navigate, Route,  Routes, useNavigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../pages/NotFound";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import Loader from "../componnents/modules/Loader";
function Router() {
  const {data,isLoading}=useQuery(['getProfile'],getProfile);
  console.log(data,isLoading);
  if(isLoading) return <Loader/>;
    return (
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={data?<DashboardPage />:<Navigate to="/auth"/>} />
          <Route path="/admin" element={data && data.data.role==="ADMIN"?<AdminPage />:<Navigate to="/"/>} />
          <Route path="/auth" element={data?<Navigate to="dashboard"/>:<AuthPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;