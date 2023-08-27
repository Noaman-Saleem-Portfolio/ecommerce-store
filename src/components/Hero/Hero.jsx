import React from "react";
import heroImage from "../../images/hero.jpg";
import styles from "./Hero.module.css";

const Hero = ({ introText }) => {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles.heroText}>
        <h4>WELCOME TO</h4>
        <h2>Techie {introText}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque quam perferendis, provident, ad neque, ducimus reiciendis
          eligendi debitis expedita autem blanditiis? Modi id consequatur
          accusantium atque, aliquid odit impedit!
        </p>
        <button>Shop Now</button>
      </div>
      <div className={styles.heroImage}>
        <figure>
          <img src={heroImage} alt="Shopping for all family" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
