import { useState } from "react";
import styles from "./styles.module.css";
import type { SortType } from "../../interface/sortType";

type Props = {
  setSort: (option: SortType) => void;
  sort: SortType;
};

export const SortMenu = ({ sort, setSort }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.btn} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
            stroke="currentcolor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <div
          className={`${styles.option} ${
            sort === "none" ? styles.selected : ""
          }`}
          onClick={() => setSort("none")}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 4.75L4.75 14.25M4.75 4.75L14.25 14.25"
              stroke="currentcolor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Padrão</p>
        </div>

        <div
          className={`${styles.option} ${
            sort === "asc" ? styles.selected : ""
          }`}
          onClick={() => setSort("asc")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15.8333V4.16663M10 4.16663L4.16669 9.99996M10 4.16663L15.8334 9.99996"
              stroke="currentcolor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>População</p>
        </div>

        <div
          className={`${styles.option} ${
            sort === "desc" ? styles.selected : ""
          }`}
          onClick={() => setSort("desc")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99998 4.16671V15.8334M9.99998 15.8334L15.8333 10M9.99998 15.8334L4.16665 10"
              stroke="currentcolor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>População</p>
        </div>
      </div>
    </div>
  );
};
