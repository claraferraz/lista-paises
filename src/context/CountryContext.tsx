/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { CountryType } from "../interface/countryType";
import { getAllCountries } from "../service/countryService";
import type { SortType } from "../interface/sortType";

export const CountryContext = createContext<
  | {
      list: CountryType[] | undefined;
      getCountryList: () => void;
      sortList: (order: SortType) => void;
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
  const [originalList, setOriginalList] = useState<CountryType[] | undefined>(
    undefined
  );
  const [list, setList] = useState<CountryType[] | undefined>(originalList);
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
      setOriginalList(response);
      setList(response);
    } catch {
      throw new Error("something went wrong");
    }
  };

  const sortList = (order: SortType) => {
    if (!originalList) return;
    switch (order) {
      case "none":
        setList(originalList);
        break;
      case "asc": {
        const sortedList = originalList.toSorted(
          (a, b) => a.population - b.population
        );
        setList(sortedList);
        break;
      }
      case "desc": {
        const sortedList = originalList.toSorted(
          (a, b) => b.population - a.population
        );
        setList(sortedList);
        break;
      }

      default:
        setList(originalList);
        break;
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
        sortList,
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
