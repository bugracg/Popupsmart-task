import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <h1 className={styles.text}>
          Simple modal <div className={styles.text1}>card creator</div>
        </h1>
        <h2 className={styles.text2}>
          A utility-first CSS framework packed with classeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup.
        </h2>

        <button className={styles.button}>Try it out now</button>
        <div className={styles.text3}>
          <div className={styles.a1}>✓ Free and paid plans</div>

          <div className={styles.a2}>✓ Setup in minutes</div>
          <div className={styles.a3}>✓ No credit card required*</div>
        </div>

        <div className={styles.card}>
          <div className={styles.leftContainer}>
            <Image src="/camper.svg" width="100px" height="100px" />
            <h1>Join in te club</h1>
            <p> Subscribe and Get an Extra</p>
            <p>%25 off on your firs purchase</p>
            <input
              className={styles.mailinput}
              placeholder="Email address"
            ></input>
            <button className={styles.subs}>Subscribe</button>
            <p>By signing up, you agree </p>
            <p>Pricavy Policy and Terms of Use</p>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.imgtext}>
              Mediterranean
              <div>Sneakers®</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
