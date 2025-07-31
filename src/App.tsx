import styles from "./App.module.scss";
import { Main } from "./components/main/Main";

export const App = () => {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};
