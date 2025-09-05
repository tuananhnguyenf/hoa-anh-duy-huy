import React from "react";

import styles from "./DressCodeColor.module.css";

interface DressCodeColorProps {
  color: string;
}

export const DressCodeColor: React.FC<DressCodeColorProps> = ({ color }) => (
  <span className={styles.circle} style={{ backgroundColor: color }}></span>
);
