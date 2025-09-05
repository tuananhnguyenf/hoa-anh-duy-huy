import styles from "./TitleCard.module.css";

export const TitleCard = () => {
  return (
    <div className={styles.titleCard}>
      <div className={styles.dateSection}>
        <div className={styles.date}>
          <div>12</div>
          <div className={styles.dateValue}>
            10
            <div className={styles.dateValue}>25</div>
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.saveTheDate}>SAVE THE DATE</div>
      </div>
      <div className={styles.names}>
        Hoa Anh <br />
        &<br />
        Duy Huy
      </div>
    </div>
  );
};
