import { InfoCard, TimeLine, TitleCard } from "../components";
import { DressCode } from "../components/DressCode/DressCode";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <TitleCard />
      <InfoCard />
      <TimeLine />
      <DressCode />
    </div>
  );
};
