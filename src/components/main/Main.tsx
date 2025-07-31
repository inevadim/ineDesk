import { useState } from "react";
import { Card } from "../card/Card";
import styles from "./Main.module.scss";
import { Weather } from "../../layout/weather/Weather";

export const Main = () => {
  const handlerAdd = () => {
    setCard((prev) => [...prev, { name: "Card6" }]);
  };
  const items = [
    { name: "Card1" },
    { name: "Card2" },
    { name: "Card3" },
    { name: "Card4" },
    { name: "Card5" },
  ];
  const [card, setCard] = useState(items);
  return (
    <div className={styles.main}>
      <div className={styles.wrapCard}>
        {card.map((i) => {
          return <Card key={i.name} name={i.name} />;
        })}
        <Card Component={Weather} />
      </div>
      <div onClick={() => handlerAdd()}>plus</div>
    </div>
  );
};
