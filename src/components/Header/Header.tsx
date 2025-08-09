import styles from "./styles.module.css";
import Globe from "../../assets/images/Globe.svg";
import Heart from "../../assets/images/Heart.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <img
        onClick={() => navigate("/")}
        className={styles.icon}
        src={Globe}
        alt="globe icon"
      />
      <h1>Lista de Países</h1>
      <img
        onClick={() => navigate("/favorites")}
        className={styles.icon}
        src={Heart}
        alt="favorties icon"
      />
    </div>
  );
};
