import { CardHeading } from "../CardHeading";
import { DressCodeColor } from "./DressCodeColor";

import styles from "./DressCode.module.css";

export const DressCode = () => (
  <div className={styles.container}>
    <CardHeading heading="Dress Code" />
    <div className={styles.content}>
      Přijďte svatebně naladěni a pokud možno společensky oblečeni. Chceme,
      abyste se na naší svatbě cítili pohodlně, proto dress code není striktní.
    </div>
    <div className={styles.content}>
      Kdybyste se nemohli barevně rozhodnout, pro inspiraci přikládáme paletu
      barev, do které se můžete sladit.
    </div>
    <div className={styles.colors}>
      <DressCodeColor color="#003d20" />
      <DressCodeColor color="#bfecac" />
      <DressCodeColor color="#fbe2c1" />
      <DressCodeColor color="#8bd4ff" />
      <DressCodeColor color="#00167a" />
    </div>
    <div className={styles.content}>Avšak bílou barvu nechte nevěstě 😉</div>
  </div>
);
