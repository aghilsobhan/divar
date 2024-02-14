import {  Route,  Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../pages/NotFound";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
function Router() {
  const {data,isLoading}=useQuery(['getProfile'],getProfile);
  //console.log(data,isLoading);
    return (
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/doshboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;