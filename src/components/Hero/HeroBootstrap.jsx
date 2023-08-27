import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import styles from "./HeroBootstrap.module.css";

import heroImage from "../../images/hero.jpg";

const HeroBootstrap = ({ introText }) => {
  return (
    <div className={`container ${styles.heroBootstrap}`}>
      <Row
        className="align-items-center justify-content-center"
        style={{ height: "400px" }}
      >
        <Col xs={{ order: 2 }} sm={7} md={6} lg={5} className="order-sm-1">
          <h4>WELCOME TO</h4>
          <h2>Techie {introText}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque quam perferendis, provident, ad neque, ducimus reiciendis
            eligendi debitis expedita autem blanditiis? Modi id consequatur
            accusantium atque, aliquid odit impedit!
          </p>
          <button>Shop Now</button>
        </Col>
        <Col xs={{ order: 1 }} sm={5} md={6} lg={5} className="order-sm-2">
          <figure>
            {/* <img src={heroImage} alt="Shopping for all family" /> */}
            <Image src={heroImage} />
          </figure>
        </Col>
      </Row>
    </div>
  );
};

export default HeroBootstrap;
