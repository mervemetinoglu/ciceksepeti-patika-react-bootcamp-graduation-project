import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";
import {
  WrapperOfferModal,
  ModalHeader,
  ProductInfo,
  WrapperOfferSection,
  OfferOption,
} from "./scOfferModal";


const OfferProductModal = ({ product, setModalIsOpen }) => {
  return (
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
        <form>
          <OfferOption>
            <label htmlFor="20">%20'si Kadar Teklif Ver</label>
            <input type="radio" name="offers" id="20" />
          </OfferOption>
          <OfferOption>
            <label htmlFor="30">%30'u Kadar Teklif Ver</label>
            <input type="radio" name="offers" id="30" />
          </OfferOption>
          <OfferOption>
            <label htmlFor="40">%40'ı Kadar Teklif Ver</label>
            <input type="radio" name="offers" id="40" />
          </OfferOption>
          <div className="customOffer">
            <input type="text" id="customOffer" placeholder="Teklif Belirle" />
          </div>
        </form>
          <Button isPrimaryButton={true} text="Onayla" onClick={() => console.log("ok")}></Button>
      </WrapperOfferSection>
    </WrapperOfferModal>
  );
};

export default OfferProductModal;
