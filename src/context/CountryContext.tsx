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
      console.log(index);
      return;
    } else {
      setFavorites([...favorites, country]);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  const removeFavorites = (country: CountryType) => {
    const index = favorites.findIndex((element) => element === country);
    if (index === -1 || undefined) return;
    favorites.splice(index, 1);
    setFavorites(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
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
      }}
    >
      {children}
    </CountryContext>
  );
};
