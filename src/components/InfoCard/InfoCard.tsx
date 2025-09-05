import styles from "./InfoCard.module.css";

export const InfoCard = () => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.date}>12/10/2025</div>
      <div className={styles.imageContainer}>
        <img
          src="src/assets/havel.png"
          alt="chateau-image"
          height="auto"
          width="100%"
        />
      </div>
      <div className={styles.place}>
        <h1 className={styles.heading}>Chateau St. Havel</h1>
        <div>
          Před nádražím 1/6,
          <br /> 110 00 Praha 4
        </div>
      </div>
    </div>
  );
};
