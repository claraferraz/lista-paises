import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FavoritesPage } from "../pages/FavoritesPages";
import { SearchResultPage } from "../pages/SearchResultPage";
import type { CountryType } from "../interface/countryDTO";

type Props = {
  searchResults: CountryType[] | undefined;
};

export const MainRoutes = ({ searchResults }: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      {searchResults && (
        <Route
          path="/:search"
          element={<SearchResultPage country={searchResults} />}
        />
      )}
    </Routes>
  );
};
