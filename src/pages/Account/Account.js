import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { getEmail } from "../../helpers/auth";
import Tabs from "../../components/Tab/Tab";
import "./account.style.scss";
import userIcon from "../../assets/user-icon.svg";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import givenOffersAction from "../../actions/givenOffersAction";
import receivedOffersAction from "../../actions/receivedOffersAction";

const Account = () => {
  const userEmail = getEmail();
  const dispatch = useDispatch();
  const { givenOffers } = useSelector((state) => state.givenOffers);
  const { receivedOffers } = useSelector((state) => state.receivedOffers);

  function actionCreator() {
    return (dispatch) => {
      dispatch(givenOffersAction());
      dispatch(receivedOffersAction());
    };
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(actionCreator());
    }
    return () => {
      isMounted = false;
    };
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
          <Tabs label="Teklif Aldıklarım">
            <div label="Teklif Aldıklarım"></div>
            <div label="Teklif Verdiklerim"></div>
          </Tabs>
        </div>
        <div>
          {givenOffers.length > 0 ? (
            givenOffers.map((offer, index) => <div key={index}>{offer}</div>)
          ) : (
            <div className="aldiklarim"> Verilen Teklif Yok </div>
          )}
        </div>
        <div>
          {receivedOffers.length > 0 ? (
            receivedOffers.map((offer, index) => <div key={index}>{offer}</div>)
          ) : (
            <div> Alınan Teklif Yok </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Account;
