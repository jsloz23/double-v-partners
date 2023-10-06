import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import DatabaseUserPage from "../pages/DatabaseUserPage";

export const AppRoutes = () => {
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<UserPage />} />
        <Route path="/dbusers" element={<DatabaseUserPage />} />
    </Routes>
    )
}