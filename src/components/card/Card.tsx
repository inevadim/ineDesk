import styles from "./Card.module.scss";

type Props = {
  name?: string;
  Component?: React.FC;
};
export const Card = ({ name, Component }: Props) => {
  return (
    <div className={styles.card}>
      {name}
      {Component && <Component />}
    </div>
  );
};
