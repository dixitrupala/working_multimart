import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img.png";
import "../styles/home.css";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "char"
    );

    setData(filteredProducts);
  },[]);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_sutitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  In this practical react js project tutorial, I'm going to
                  teach you, step-by-step, how to create a full stack react
                  ecommerce website using reactjs, redux toolkit and firebase
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
