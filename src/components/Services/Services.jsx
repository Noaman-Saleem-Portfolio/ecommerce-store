import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={`container ${styles.services}`}>
      <Row className="g-2">
        <Col md={3}>
          <TbTruckDelivery />
          <p>Super Fast and Free Delivery</p>
        </Col>
        <Col md={3}>
          <Row className="gy-2">
            <Col md={12}>
              <GiReceiveMoney />
              <p>Non-contact Shipping</p>
            </Col>
            <Col md={12}>
              <MdSecurity />
              <p>Money-back Guaranty</p>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <RiSecurePaymentLine />
          <p>Super Secure Payment System</p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
