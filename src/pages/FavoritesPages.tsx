import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { brasil } from "../interface/countryDTO";
import styles from "./styles.module.css";

export const FavoritesPage = () => {
  return (
    <section>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2>Favoritos</h2>
        </div>
        <p>filter</p>
      </div>
      <CardSection>
        <CountryCard country={brasil} liked={false} />
        <CountryCard country={brasil} liked={true} />
        <CountryCard country={brasil} liked={true} />
        <CountryCard country={brasil} liked={true} />
      </CardSection>
    </section>
  );
};
