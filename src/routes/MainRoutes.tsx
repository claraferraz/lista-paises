import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FavoritesPage } from "../pages/FavoritesPages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
