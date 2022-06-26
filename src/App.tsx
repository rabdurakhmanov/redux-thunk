import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { UserPage } from "./pages/UserPage/UserPage";
import { UsersPage } from "./pages/UsersPage/UsersPage";

export const App = function () {
    return (
        <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path=":userName" element={<UserPage />} />
        </Routes>
    );
};
