/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { MainRoutes } from "./routes/MainRoutes";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useCountry } from "./context/CountryContext";
import type { CountryType, NativeNames } from "./interface/countryType";
import { SortMenu } from "./components/SortMenu/SortMenu";
import "./App.css";
import type { SortType } from "./interface/sortType";

function App() {
  const [fav, setFav] = useState(false);
  const [searchedCountry, setSearchedCountry] = useState<
    CountryType[] | undefined
  >(undefined);
  const [sortedSearchedCountry, setSortedSearchedCountry] = useState<
    CountryType[] | undefined
  >(undefined);
  const [searchWord, setSearchWord] = useState("");
  const [title, setTitle] = useState("Página inicial");
  const [sort, setSort] = useState<SortType>("none");

  const url = useLocation();
  const navigate = useNavigate();
  const {
    getCountryList,
    list,
    favorites,
    sortFavorites,
    sortMainList,
    sortList,
  } = useCountry();

  const getSearchedCountry = (data: string | null) => {
    if (!data) {
      return;
    }

    setSearchWord(data);
    const result = list?.filter((country) => {
      const commonName: string = country.name.common.toLowerCase();
      const nativeNames: string[] = Object.values<NativeNames>(
        country.name.nativeName
      ).flatMap((nativeName) => {
        return [
          nativeName.official.toLowerCase(),
          nativeName.common.toLowerCase(),
        ];
      });
      return (
        commonName.includes(data.toLowerCase()) ||
        nativeNames.find((native) => native.includes(data.toLowerCase())) !==
          undefined
      );
    });

    if (result) {
      setSearchedCountry(result);
      setSortedSearchedCountry(result);
      navigate(`/${data}`);
    }
  };

  useEffect(() => {
    setFav(url.pathname === "/favorites" ? true : false);
    if (url.pathname === "/") setTitle("Página inicial");
    if (url.pathname === "/favorites") setTitle("Favoritos");
    if (url.pathname === `/${searchWord}` && searchWord != "")
      setTitle(`Resultados da busca para "${searchWord}"`);
  }, [url.pathname]);

  useEffect(() => {
    getCountryList();
    setTitle("Página Inicial");
  }, []);

  useEffect(() => {
    console.log(sort);
    if (list && url.pathname === "/") {
      sortMainList(sort);
    }
    if (favorites && url.pathname === "/favorites") {
      sortFavorites(sort);
    }
    if (
      url.pathname === `/${searchWord}` &&
      searchWord != "" &&
      searchedCountry
    ) {
      setSortedSearchedCountry(sortList(sort, searchedCountry));
    }
  }, [sort]);

  return (
    <Wrapper>
      <Header fav={fav} />
      <SearchBar onSubmit={getSearchedCountry} />
      <div className="titleHeader">
        <div className="titleWrapper">
          <h2>{title}</h2>
        </div>
        <SortMenu setSort={setSort} sort={sort} />
      </div>
      <MainRoutes searchResults={sortedSearchedCountry} />
    </Wrapper>
  );
}

export default App;
