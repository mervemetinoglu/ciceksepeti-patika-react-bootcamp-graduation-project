import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";
import {
  WrapperOfferModal,
  ModalHeader,
  ProductInfo,
  WrapperOfferSection,
} from "./scOfferModal";
import { Overlay, ModalWrapper } from "./scModal";

const OfferProductModal = ({ product, setModalIsOpen, offerProduct }) => {
  const [offerPercent, setOfferPercent] = useState();
  const [customOffer, setCustomOffer] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let offeredPrice;
    if (offerPercent) {
      offeredPrice = parseFloat(
        ((product.price / 100) * offerPercent).toFixed(2)
      );
    } else {
      offeredPrice = customOffer;
    }
    offerProduct(product.id, { offeredPrice: offeredPrice });
    setModalIsOpen(false);
  };

  return (
    <>
      <Overlay />
      <ModalWrapper isOfferModal={true}>
        <WrapperOfferModal>
          <ModalHeader>
            <h4>Teklif Ver</h4>
            <IoMdClose
              className="close-btn"
              onClick={() => setModalIsOpen(false)}
            />
          </ModalHeader>
          <ProductInfo>
            <div>
              <img src={product.imageUrl} alt={product.title} />
              <div>
                <div>{product.title}</div>
                <div>{product.status.title}</div>
              </div>
            </div>
            <div className="price">{product.price} TL</div>
          </ProductInfo>
          <WrapperOfferSection>
            <form onSubmit={handleSubmit}>
              <div className="radiobtn">
                <input
                  type="radio"
                  id="20"
                  name="offers"
                  onChange={() => setOfferPercent(20)}
                />
                <label htmlFor="20">
                  <span>%20'si Kadar Teklif Ver</span>
                </label>
              </div>
              <div className="radiobtn">
                <input
                  type="radio"
                  id="30"
                  name="offers"
                  onChange={() => setOfferPercent(30)}
                />
                <label htmlFor="30"><span>%30'u Kadar Teklif Ver</span></label>
              </div>
              <div className="radiobtn">
                <input
                  type="radio"
                  id="40"
                  name="offers"
                  onChange={() => setOfferPercent(40)}
                />
                <label htmlFor="40"><span>%40'ı Kadar Teklif Ver</span></label>
              </div>

              <div className="custom-offer__input">
                <input
                  type="text"
                  name="custom-offer"
                  id="customOffer"
                  placeholder="Teklif Belirle"
                  onChange={(e) => setCustomOffer(parseFloat(e.target.value))}
                />
                <label htmlFor="customOffer">TL</label>
              </div>

              <Button isPrimaryButton={true} text="Onayla">
                <button type="submit"></button>
              </Button>
            </form>
          </WrapperOfferSection>
        </WrapperOfferModal>
      </ModalWrapper>
    </>
  );
};

export default OfferProductModal;
