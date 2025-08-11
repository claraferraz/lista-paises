import styles from "./styles.module.css";
import SearchIcon from "../../assets/images/Search.svg";
import { useState } from "react";

type Props = {
  onSubmit: (query: string | null) => void;
};

export const SearchBar = ({ onSubmit }: Props) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSubmit(search);
  };

  return (
    <div className={styles.wrapper}>
      <form action={handleSearch} className={styles.form}>
        <input
          name="country"
          className={styles.input}
          type="text"
          placeholder="Pesquisar país"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.icon} type="submit">
          <img src={SearchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
};
