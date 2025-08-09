import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <Wrapper>
      <Header />
      <MainRoutes />
    </Wrapper>
  );
}

export default App;
