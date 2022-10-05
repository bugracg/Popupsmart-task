import React, { PropsWithChildren } from "react";
import styles from "./Card.module.scss";


interface CardProps {
  src: string;
}

const Card: React.FC<CardProps> = ({ src }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt="card" />
      <div className={styles.overlay}>
        <button className={styles.selectTemplateButton}>Select Template</button>
      </div>
    </div>
  );
};

export default Card;
