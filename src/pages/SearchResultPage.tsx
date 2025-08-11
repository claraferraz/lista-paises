import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { useCountry } from "../context/CountryContext";
import type { CountryType } from "../interface/countryType";

type Props = {
  country: CountryType[];
};

export const SearchResultPage = ({ country }: Props) => {
  const { checkFavorite } = useCountry();

  return (
    <section>
      <CardSection>
        {country?.map((c, i) => {
          const fav = checkFavorite(c);
          return <CountryCard key={i} country={c} fav={fav} />;
        })}
      </CardSection>
    </section>
  );
};
