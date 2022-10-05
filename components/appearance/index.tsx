import React, { useState } from "react";
import styles from "./appearance.module.scss";

const Appearance = () => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e:any) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
 
  return (
    
    <>
      <div className={styles.A}>
        <div className={styles.title}>
          <div className={styles.appearance}>2</div>
          <h1 className={styles.appearancetext}>Appearance</h1>
          <p>(Size,colors,logo)</p>
        </div>
        <div className={styles.size}>Size</div>
        <div className={styles.allbutton}>
          {" "}
          <button className={styles.active}>Small</button>
          <button className={styles.active}>Medium</button>
          <button className={styles.active}>Large</button>
        </div>
      </div>

      <div className={styles.position}>
        <div >
          
          <div>Position</div>
          <button className={styles.group1box1}></button>
          <button className={styles.group1box2}></button>
          <button className={styles.group1box3}></button>
        </div>
      
      <div>
        <button className={styles.group2box1}></button>
        <button className={styles.group2box2}></button>
        <button className={styles.group2box3}></button>
      </div>
      <div>
        <button className={styles.group3box1}></button>
        <button className={styles.group3box2}></button>
        <button className={styles.group3box3}></button>
      </div>


<h1 className={styles.onlytext}>Colors</h1>
      <div className={styles.colors}></div>
      <button className={styles.buttoncheck1}></button>
      <button className={styles.buttoncheck2}></button>
      <button className={styles.buttoncheck3}></button>
      <button className={styles.buttoncheck4}></button>
      <button className={styles.buttoncheck5}></button>
      </div>

<div className={styles.imageupload}>Upload logo
      <div >
       {image.preview && <img src={image.preview} width='100' height='100' />}
       <form onSubmit={handleSubmit}>
       <input type='file' name='file' onChange={handleFileChange}></input></form>
      </div>
      </div>
    </>
  );
};

export default Appearance;
