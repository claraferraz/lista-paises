import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { useCountry } from "../context/CountryContext";
import styles from "./styles.module.css";

export const HomePage = () => {
  const { list, checkFavorite } = useCountry();

  return (
    <section>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2>Página inicial</h2>
        </div>
        <p>filter</p>
      </div>
      <CardSection>
        {list?.map((l, i) => {
          const fav = checkFavorite(l);
          return <CountryCard key={i} country={l} fav={fav} />;
        })}
      </CardSection>
    </section>
  );
};
