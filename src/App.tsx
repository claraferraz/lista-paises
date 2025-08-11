/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { MainRoutes } from "./routes/MainRoutes";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { useCountry } from "./context/CountryContext";
import type { CountryType } from "./interface/countryDTO";
import { SearchResultPage } from "./pages/SearchResultPage";

function App() {
  const [fav, setFav] = useState(false);
  const url = useLocation();
  const { getCountryList, list } = useCountry();
  const [searchedCountry, setSearchedCountry] = useState<
    CountryType[] | undefined
  >(undefined);

  const getSearchedCountry = (data: string | null) => {
    if (!data) {
      return;
    }

    const result = list?.filter((country) => {
      const commonName = country.name.common.toLowerCase();
      const nativeNames = Object.values(country.name.nativeName).flatMap(
        (nativeName) => {
          return [
            nativeName.official.toLowerCase(),
            nativeName.common.toLowerCase(),
          ];
        }
      );

      return (
        commonName.includes(data.toLowerCase()) ||
        nativeNames.find((native) => native.includes(data.toLowerCase())) !==
          undefined
      );
    });

    if (result) setSearchedCountry(result);
  };

  useEffect(() => {
    setFav(url.pathname === "/favorites" ? true : false);
  }, [url.pathname]);

  useEffect(() => {
    getCountryList();
  }, []);

  useEffect(() => {
    console.log(searchedCountry);
  }, [searchedCountry]);

  return (
    <Wrapper>
      <Header fav={fav} />
      <SearchInput onSubmit={getSearchedCountry} />
      {searchedCountry && <SearchResultPage country={searchedCountry} />}
      {!searchedCountry && <MainRoutes />}
    </Wrapper>
  );
}

export default App;
