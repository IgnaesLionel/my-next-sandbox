import React from "react";
import styles from "./ButtonArrow.module.css";

const ButtonArrow = (props) => {
  return (
    <div id="container">
      <button className={styles.arrow}>
        <span className={styles.circle} aria-hidden="true">
          <span className={styles.iconarrow}></span>
        </span>
        <span className={styles.buttontext}>
          {props.buttonName} {<img src={props.img} alt="" />}
        </span>
      </button>
    </div>
  );
};

export default ButtonArrow;
