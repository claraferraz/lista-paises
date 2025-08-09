/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
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
      getFavorites: () => CountryType[] | [];
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

  const getCountryList = async () => {
    try {
      const response = await getAllCountries();
      setList(response);
    } catch {
      throw new Error("something went wrong");
    }
  };

  const addFavorites = (country: CountryType) => {
    setFavorites([...favorites, country]);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  const removeFavorites = (country: CountryType) => {
    const index = favorites.findIndex((element) => element === country);
    setFavorites(favorites.splice(index));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const getFavorites = () => {
    const storageList = localStorage.getItem("favorites");
    if (storageList) {
      return JSON.parse(storageList);
    }
  };

  return (
    <CountryContext
      value={{
        list,
        getCountryList,
        favorites,
        getFavorites,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </CountryContext>
  );
};
