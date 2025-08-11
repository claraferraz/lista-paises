import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { useCountry } from "../context/CountryContext";

export const HomePage = () => {
  const { list, checkFavorite } = useCountry();

  return (
    <section>
      <CardSection>
        {list?.map((l, i) => {
          const fav = checkFavorite(l);
          return <CountryCard key={i} country={l} fav={fav} />;
        })}
      </CardSection>
    </section>
  );
};
