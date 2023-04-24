import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

const ProductCard = (item) => {
  return (
    <Col lg="3" md="4" key={item.id}>
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{scale : 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name"><Link to={`/shop/${item.id}`}></Link>{item.productName}</h3>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2"></div>
        <span className="price">${item.price}</span>
        <motion.span whileTap={{scale : 1.2}}>
          <i className="ri-add-line"></i>
        </motion.span>
      </div>
    </Col>
  );
};

export default ProductCard;
