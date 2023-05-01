import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.scss";

const Card: FC = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    const aux = counter;
    setCounter(aux + 1);
  };

  const handleDecrease = () => {
    const aux = counter;
    setCounter(aux - 1);
  };

  return (
    <div className={styles.container}>
      <h1>{t("components.card.title")}</h1>
      <p>{t("components.card.description")}</p>
      <div className={styles.counter}>
        <button onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default Card;
