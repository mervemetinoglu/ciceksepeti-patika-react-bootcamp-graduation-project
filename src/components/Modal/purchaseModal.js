import Button from "../Button/Button";
import { WrapperPurchaseModal } from "./scPurchaseModal";

const PurchaseModal = ({ setModalIsOpen }) => {
  return (
    <WrapperPurchaseModal>  
        <h2>Satın Al</h2>
        <h4>Satın Almak istiyor musunuz?</h4>  
      <div className="buttons">
        <Button
          isPrimaryButton={false}
          text="Vazgeç"
          onClick={() => setModalIsOpen(false)}
        />
        <Button isPrimaryButton={true} text="Satın Al" />
      </div>
    </WrapperPurchaseModal>
  );
};

export default PurchaseModal;
