import React from "react";

import styles from "./CardHeading.module.css";

interface CardHeadingProps {
  heading: string;
}

export const CardHeading: React.FC<CardHeadingProps> = ({ heading }) => (
  <h1 className={styles.heading}>{heading}</h1>
);
