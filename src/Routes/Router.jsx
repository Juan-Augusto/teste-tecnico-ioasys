import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/HomePage/Home";
import { Login } from "../Pages/LoginPage/Login";
import { NotFound } from "../Pages/NotFound/NotFound";

export const RoutesList = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}