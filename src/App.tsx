import { useLocation } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { MainRoutes } from "./routes/MainRoutes";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchInput } from "./components/SearchInput/SearchInput";

function App() {
  const [fav, setFav] = useState(false);
  const url = useLocation();
  useEffect(() => {
    setFav(url.pathname === "/favorites" ? true : false);
  }, [url.pathname]);
  return (
    <Wrapper>
      <Header fav={fav} />
      <SearchInput />
      <MainRoutes />
    </Wrapper>
  );
}

export default App;
