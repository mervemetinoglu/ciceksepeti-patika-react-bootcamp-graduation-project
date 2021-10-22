import React from "react";
import { Overlay, ModalWrapper } from "./scModal";
import PurchaseModal from "./purchaseModal";
import OfferProductModal from "./offerProductModal";

const Modal = ({ product, setModalIsOpen, isOfferModal }) => {
  return (
    <>
      <Overlay />
      <ModalWrapper isOfferModal={isOfferModal}>
        {isOfferModal ? (
          <OfferProductModal
            product={product}
            setModalIsOpen={setModalIsOpen}
          />
        ) : (
          <PurchaseModal product={product} setModalIsOpen={setModalIsOpen} />
        )}
      </ModalWrapper>
    </>
  );
};

export default Modal;
