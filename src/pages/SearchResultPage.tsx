import { useParams } from "react-router-dom";
import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { useCountry } from "../context/CountryContext";
import type { CountryType } from "../interface/countryDTO";
import styles from "./styles.module.css";

type Props = {
  country: CountryType[];
};

export const SearchResultPage = ({ country }: Props) => {
  const { checkFavorite } = useCountry();
  const url = useParams();
  const query = url.search;

  return (
    <section>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2>Resultados da Busca por "{query}"</h2>
        </div>
        <p>filter</p>
      </div>
      <CardSection>
        {country?.map((c, i) => {
          const fav = checkFavorite(c);
          return <CountryCard key={i} country={c} fav={fav} />;
        })}
      </CardSection>
    </section>
  );
};
