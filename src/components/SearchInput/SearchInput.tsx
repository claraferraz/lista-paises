import styles from "./styles.module.css";
import SearchIcon from "../../assets/images/Search.svg";

export const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input className={styles.input} type="text" />
        <img className={styles.icon} src={SearchIcon} alt="search icon" />
      </form>
    </div>
  );
};
