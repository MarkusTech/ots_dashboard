import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"

const Card = ({ item }) => {
  const number = 1;
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Sales</span>
        <span className={styles.number}>123123</span>
        <span className={styles.detail}>
          <span className={number > 0 ? styles.positive : styles.negative}>
            2
          </span>{" "}
          {number > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
