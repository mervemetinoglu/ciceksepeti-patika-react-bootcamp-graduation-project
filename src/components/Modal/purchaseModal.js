import Button from "../Button/Button";
import { WrapperPurchaseModal } from "./scPurchaseModal";
import { Overlay, ModalWrapper } from "./scModal";

const PurchaseModal = ({ setModalIsOpen, onClick }) => {
  return (
    <>
      <Overlay />
      <ModalWrapper isOfferModal={false}>
        <WrapperPurchaseModal>
          <h2>Satın Al</h2>
          <h4>Satın Almak istiyor musunuz?</h4>
          <div className="buttons">
            <Button
              isPrimaryButton={false}
              text="Vazgeç"
              onClick={() => setModalIsOpen(false)}
            />
            <Button isPrimaryButton={true} text="Satın Al" onClick={onClick} />
          </div>
        </WrapperPurchaseModal>
      </ModalWrapper>
    </>
  );
};

export default PurchaseModal;
