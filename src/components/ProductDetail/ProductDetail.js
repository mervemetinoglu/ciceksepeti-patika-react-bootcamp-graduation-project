import React, { useState } from "react";
import "./productDetail.style.scss";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

const ProductDetail = () => {
  const { product } = useSelector((state) => state.product);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOfferButton, setOfferButton] = useState();

  const handleClick = (isOfferButton) => {
    setModalIsOpen(true);
    setOfferButton(isOfferButton);
  };

  const purchaseProduct = (id) => {};

  const offerProduct = (id, price) => {};

  return (
    <div className="product__container">
      <div className="product__img">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product__content">
        <h2>{product.title}</h2>
        <div className="product__info">
          <div>
            <div>Marka:</div>
            <div>Renk:</div>
            <div>Kullanım Durumu:</div>
          </div>
          <div>
            <div>{product.brand.title}</div>
            <div>{product.color.title}</div>
            <div>{product.status.title}</div>
          </div>
        </div>
        <h3>{product.price} TL</h3>
        <div className="product__buttons">
          {product.isSold ? (
            <div className="sold">Bu Ürün Satışta Değil</div>
          ) : (
            <>
              <Button
                isPrimaryButton={true}
                onClick={() => handleClick(false)}
                text="Satın Al"
              />
              {product.isOfferable ? (
                <Button
                  isPrimaryButton={false}
                  onClick={() => handleClick(true)}
                  text="Teklif Ver"
                />
              ) : (
                <Button
                  isPrimaryButton={false}
                  text="Bu Ürüne Teklif Verilemez"
                />
              )}
            </>
          )}
        </div>
        <div className="product__desc">
          <h4>Açıklama</h4>
          <p>{product.description}</p>
        </div>
      </div>

      {modalIsOpen && (
        <Modal
          product={product}
          setModalIsOpen={setModalIsOpen}
          isOfferModal={isOfferButton}
        />
      )}
    </div>
  );
};

export default ProductDetail;
