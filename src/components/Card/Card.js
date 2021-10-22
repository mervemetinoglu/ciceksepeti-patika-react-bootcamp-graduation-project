import React from "react";
import "./card.scss";
import { useHistory } from "react-router-dom";

const Card = ({ product }) => {
  const history = useHistory();

  const pushProduct = () => {
    history.push("/products/" + product.id);
  };

  return (
    <div className="card" onClick={pushProduct}>
      <div className="card__content">
        <div className="card-img">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="card-title">
          <h3>{product.brand.title}</h3>
          <h3>
            <b>Renk:</b> {product.color.title}
          </h3>
        </div>
        <div className="card-footer">
          <h2>{product.price} TL</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
