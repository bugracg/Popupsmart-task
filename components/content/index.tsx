import React from "react";
import styles from "./content.module.scss";

export const Content = () => {
  return (
    <>
      <div className={styles.contentpage}>
        <div className={styles.pagenumber}>3 </div>

        <h1>Edit Your Content</h1>
        <input className={styles.signupbutton} placeholder="Sign up"></input>
        
      </div>
<div className={styles.mailinput}>
<input className={styles.enteryourmail} placeholder="Enter your mail"></input>
</div>

<div className={styles.contentpage2}>
<input className={styles.signupbutton2} placeholder="Sign up"></input>
    
</div>
<div className={styles.lastinputdiv}>
    <input placeholder="By singning up, you agree to Privacy Policy " className={styles.lastinput}></input>
</div>
      
    </>
  );
};

export default Content;
