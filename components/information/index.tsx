import React from "react";
import styles from "./Information.module.scss";

const Information = () => {
  return (
    <div className={styles.container}>
      <div className={styles.msg1}>
        <div>
          <h1 className={styles.msg3x}>
            3x
            <p className={styles.p1}>Increase Conversion Rate</p>
          </h1>
        </div>

        <h1 className={styles.msg120}>
          120%
          <p className={styles.p2}> Email Subscribers</p>
        </h1>

        <h1 className={styles.msg390}>
          390%
          <p className={styles.p3}> More Customer Engagement</p>
        </h1>
        <h1 className={styles.Popupsmart}>
          Popupsmart meets, all your business needs.
        </h1>
      </div>
    </div>
  );
};

export default Information;
