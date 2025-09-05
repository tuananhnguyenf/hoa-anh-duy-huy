import type React from "react";

import styles from "./ScheduleItem.module.css";

interface ScheduleItemProps {
  time: string;
  label: string;
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, label }) => (
  <div className={styles.item}>
    <h2 className={styles.time}>{time}</h2>
    <span className={styles.label}>{label}</span>
  </div>
);
