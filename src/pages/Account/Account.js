import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEmail } from "../../helpers/auth";
import {
  getGivenOffersStatus,
  getReceivedOffersStatus,
} from "../../helpers/offerStatus";
import "./account.style.scss";
import userIcon from "../../assets/user-icon.svg";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import PurchaseModal from "../../components/Modal/purchaseModal";
import givenOffersAction from "../../actions/account/givenOffersAction";
import receivedOffersAction from "../../actions/account/receivedOffersAction";
import acceptOfferAction from "../../actions/account/acceptOfferAction";
import rejectOfferAction from "../../actions/account/rejectOfferAction";
import purchaseProductAction from "../../actions/product/purchaseProductAction";

const Account = () => {
  const history = useHistory();
  const userEmail = getEmail();
  const dispatch = useDispatch();
  const { givenOffers } = useSelector((state) => state.givenOffers);
  const { receivedOffers } = useSelector((state) => state.receivedOffers);
  const [activeTab, setActiveTab] = useState(true);
  const [productID, setProductID] = useState();
  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false);

  const displayProduct = (id) => {
    history.push(`/products/${id}`);
  };

  const acceptOffer = (offerID) => {
    dispatch(acceptOfferAction(offerID));
  };

  const rejectOffer = (offerID) => {
    dispatch(rejectOfferAction(offerID));
  };

  const purchaseProduct = (id) => {
    dispatch(purchaseProductAction(id));
    setPurchaseModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(givenOffersAction());
    dispatch(receivedOffersAction());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <div className="account__info">
        <img src={userIcon} alt="user" />
        <div>{userEmail}</div>
      </div>
      <div className="account__container">
        <div className="account_tabs">
          <span
            className={activeTab ? "active" : ""}
            onClick={() => setActiveTab(true)}
          >
            Teklif Aldıklarım
          </span>
          <span
            className={!activeTab ? "active" : ""}
            onClick={() => setActiveTab(false)}
          >
            Teklif Verdiklerim
          </span>
        </div>
        <div className="account__product-content">
          {activeTab ? (
            receivedOffers?.length > 0 ? (
              receivedOffers.map((offer, index) => (
                <div key={index} className="offer__item">
                  <div onClick={() => displayProduct(offer.product.id)}>
                    <img
                      src={offer.product.imageUrl}
                      alt={offer.product.title}
                    />
                    <div>
                      <div>{offer.product.title}</div>
                      <div className="offer__item-price">
                        Alınan Teklif: <span>{offer.offeredPrice} TL</span>
                      </div>
                    </div>
                  </div>
                  {!offer.product.isSold ? (
                    getReceivedOffersStatus(
                      offer.status,
                      offer.id,
                      acceptOffer,
                      rejectOffer
                    )
                  ) : (
                    <div className="product__status-info">Satıldı</div>
                  )}
                </div>
              ))
            ) : (
              <div>Alınan Teklif Yok</div>
            )
          ) : givenOffers?.length > 0 ? (
            givenOffers.map((offer, index) => (
              <div key={index} className="offer__item">
                <div onClick={() => displayProduct(offer.product.id)}>
                  <img src={offer.product.imageUrl} alt={offer.product.title} />
                  <div>
                    <div>{offer.product.title}</div>
                    <div className="offer__item-price">
                      Verilen Teklif: <span>{offer.offeredPrice} TL</span>
                    </div>
                  </div>
                </div>
                {!offer.product.isSold ? (
                  getGivenOffersStatus(
                    offer.status,
                    setPurchaseModalIsOpen,
                    offer.product.id,
                    setProductID
                  )
                ) : (
                  <div className="product__status-info">Satın Alındı</div>
                )}
              </div>
            ))
          ) : (
            <div>Verilen Teklif Yok</div>
          )}
        </div>
        {purchaseModalIsOpen && (
          <PurchaseModal
            setModalIsOpen={setPurchaseModalIsOpen}
            onClick={() => purchaseProduct(productID)}
          />
        )}
      </div>
    </Container>
  );
};

export default Account;
