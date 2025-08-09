import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { useCountry } from "../context/CountryContext";
import styles from "./styles.module.css";

export const FavoritesPage = () => {
  const { favorites, clearFavorites, checkFavorite } = useCountry();

  return (
    <section>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2>Favoritos</h2>
        </div>
        <p>filter</p>
        <button onClick={() => clearFavorites()}>clear</button>
      </div>
      <CardSection>
        {favorites.length === 0 && (
          <div className={styles.header}>
            <h3>Você não tem países favoritos</h3>
          </div>
        )}
        {favorites.length > 0 &&
          favorites.map((f, i) => {
            const fav = checkFavorite(f);
            return <CountryCard key={i} country={f} fav={fav} />;
          })}
      </CardSection>
    </section>
  );
};
