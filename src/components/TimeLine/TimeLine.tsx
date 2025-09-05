import { CardHeading } from "../CardHeading";
import { ScheduleItem } from "./ScheduleItem";
import styles from "./TimeLine.module.css";

export const TimeLine = () => (
  <div className={styles.timeline}>
    <div className={styles.heading}>
      <CardHeading heading="Harmonogram" />
      <h2 className={styles.subheading}>orientační</h2>
    </div>
    <div className={styles.items}>
      <ScheduleItem time="14:00" label="Příjezd hostů" />
      <ScheduleItem time="15:00" label="Obřad" />
      <ScheduleItem time="16:00" label="Focení svatebčanů" />
      <ScheduleItem time="18:30" label="Úvod" />
      <ScheduleItem time="19:00" label="Večere" />
      <ScheduleItem time="21:00" label="Kvíz" />
      <ScheduleItem time="22:00" label="Volná zábava" />
    </div>
  </div>
);
