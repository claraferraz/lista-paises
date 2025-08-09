import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export const CardSection = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};
