import Image from "next/image";
import styles from "./security-card.module.scss";

const SecurityCard = () => (
  <div className={styles.container}>
    <div className={styles.cardImg}>
      <Image src="/card1.svg" width="36px" height="44px" />
    </div>
    <h1 className={styles.card1text}>Security Code</h1>
    <h1 className={styles.card1text2}>This code expires in 24 hours</h1>
    <input className={styles.input} placeholder="Code"></input>
    <div></div>
    <button className={styles.card1but1}>Cancel</button>
    <button className={styles.card1but2}>Continue</button>
  </div>
);

export default SecurityCard;
