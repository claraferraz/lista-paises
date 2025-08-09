/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { CountryType } from "../interface/countryDTO";
import { getAllCountries } from "../service/countryService";

export const CountryContext = createContext<
  | {
      list: CountryType[] | undefined;
      getCountryList: () => void;
      favorites: CountryType[] | [];
      addFavorites: (country: CountryType) => void;
      removeFavorites: (country: CountryType) => void;
      clearFavorites: () => void;
      checkFavorite: (country: CountryType) => boolean;
    }
  | undefined
>(undefined);

export const useCountry = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error("useCountry can only be used inside theme provider");
  }
  return context;
};

export const CountryProvider = ({ children }: PropsWithChildren) => {
  const [list, setList] = useState<CountryType[] | undefined>(undefined);
  const [favorites, setFavorites] = useState<CountryType[] | []>([]);

  useEffect(() => {
    const rawFavList = localStorage.getItem("favorites");
    if (rawFavList) {
      const favList = JSON.parse(rawFavList);
      setFavorites(favList);
    }
  }, []);

  const getCountryList = async () => {
    try {
      const response = await getAllCountries();
      setList(response);
    } catch {
      throw new Error("something went wrong");
    }
  };

  const addFavorites = (country: CountryType) => {
    const index = favorites.findIndex(
      (element) => element.name.common === country.name.common
    );
    if (index != -1) {
      return;
    } else {
      const newFavorites = [...favorites, country];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };
  const removeFavorites = (country: CountryType) => {
    const updatedFavorites = favorites.filter(
      (element) => element.name.common !== country.name.common
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  const checkFavorite = (country: CountryType) => {
    const exists = favorites.find((e) => e.name.common === country.name.common);
    if (exists) {
      return true;
    }
    return false;
  };

  return (
    <CountryContext
      value={{
        list,
        getCountryList,
        favorites,
        addFavorites,
        removeFavorites,
        clearFavorites,
        checkFavorite,
      }}
    >
      {children}
    </CountryContext>
  );
};
