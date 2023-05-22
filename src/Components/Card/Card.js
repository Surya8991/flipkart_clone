import {
  Favorite
} from "@mui/icons-material";
import React, { useState, useEffect, useCallback } from "react";
import "./Card.css";

const Card = ({ offerPrice, image, name, rating, actualPrice }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel();
  }, [show, carousel]);

  return (
    <div className="card" style={{ border: "1px solid black", margin: "10px", padding: "30px" }}>
      <div className="card__heart">
        <Favorite />
      </div>
      <div className="card__image">
        <img
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={image[index]}
          alt="images"
        />
      </div>
      <div className="productDet" >
        <div className="card__details">
          <p className="title">Popular</p>
          <p>{name} Brand  <span> <b> Size :</b>  6,7,8,9</span></p>
          <span className="span1">₹{offerPrice}</span>
          <span className="span2">₹{actualPrice}</span>
          <span className="span3">56%</span>
        </div>
        <button className="addbtn"> Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;