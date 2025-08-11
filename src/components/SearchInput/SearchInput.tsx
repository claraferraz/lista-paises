import styles from "./styles.module.css";
import SearchIcon from "../../assets/images/Search.svg";
import { useState } from "react";

type Props = {
  onSubmit: (query: string | null) => void;
};

export const SearchInput = ({ onSubmit }: Props) => {
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
        <button type="submit">
          <img className={styles.icon} src={SearchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
};
