import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../../actions/product/productAction";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import "./productDetail.style.scss";
import Button from "../../components/Button/Button";
import purchaseProductAction from "../../actions/product/purchaseProductAction";
import OfferProductModal from "../../components/Modal/offerProductModal";
import PurchaseModal from "../../components/Modal/purchaseModal";
import offerProductAction from "../../actions/product/offerProductAction";
import cancelOfferAction from "../../actions/account/cancelOfferAction";
import givenOffersAction from "../../actions/account/givenOffersAction";
import { ToastContainer } from "react-toastify";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { givenOffers } = useSelector((state) => state.givenOffers);
  const { id } = useParams();
  const [offerModalIsOpen, setOfferModalIsOpen] = useState(false);
  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false);

  const givenOfferedProd = givenOffers.filter(
    (item) => item.product.id === id
  )[0];

  const purchaseProduct = (id) => {
    dispatch(purchaseProductAction(id));
    setPurchaseModalIsOpen(false);
  };

  const offerProduct = (id, price) => {
    dispatch(offerProductAction(id, price));
  };

  const cancelOffer = (offerID, prodID) => {
    dispatch(cancelOfferAction(offerID, prodID));
  };

  useEffect(() => {
    dispatch(productAction(id));
    dispatch(givenOffersAction());
  }, [dispatch, id]);

  return (
    <Container>
      <Header />
      {Object.keys(product).length > 0 ? (
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
            {givenOfferedProd?.offeredPrice && (
              <div className="given-offer">
                Verilen Teklif: <span>{givenOfferedProd?.offeredPrice} TL</span>
              </div>
            )}
            <div className="product__buttons">
              {product.isSold ? (
                <div className="sold">Bu Ürün Satışta Değil</div>
              ) : (
                <>
                  <Button
                    isPrimaryButton={true}
                    onClick={() => setPurchaseModalIsOpen(true)}
                    text="Satın Al"
                  />
                  {product.isOfferable ? (
                    givenOfferedProd?.offeredPrice ? (
                      <Button
                        isPrimaryButton={false}
                        onClick={() =>
                          cancelOffer(givenOfferedProd.id, product.id)
                        }
                        text="Teklifi Geri Çek"
                      />
                    ) : (
                      <Button
                        isPrimaryButton={false}
                        onClick={() => setOfferModalIsOpen(true)}
                        text="Teklif Ver"
                      />
                    )
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

          {offerModalIsOpen && (
            <OfferProductModal
              product={product}
              setModalIsOpen={setOfferModalIsOpen}
              offerProduct={offerProduct}
            />
          )}

          {purchaseModalIsOpen && (
            <PurchaseModal
              setModalIsOpen={setPurchaseModalIsOpen}
              onClick={() => purchaseProduct(product.id)}
            />
          )}
        </div>
      ) : (
        <Spinner />
      )}
      {product?.isSold && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </Container>
  );
};

export default ProductDetailPage;
