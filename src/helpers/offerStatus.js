export function getGivenOffersStatus(
  status,
  setPurchaseModalIsOpen,
  id,
  setProductID
) {
  if (status === "accepted") {
    return (
      <div className="accepted-offer">
        <button
          onClick={() => {
            setPurchaseModalIsOpen(true);
            setProductID(id);
          }}
        >
          Satın Al
        </button>
        <span>Onaylandı</span>
      </div>
    );
  }
  if (status === "rejected") {
    return (
      <div className="rejected-offer">
        <span>Reddedildi</span>
      </div>
    );
  }
  if (status === "offered") {
    return (
      <div>
        <span>Teklif Verildi</span>
      </div>
    );
  }
}

export function getReceivedOffersStatus(status, id, acceptOffer, rejectOffer) {
  if (status === "accepted") {
    return (
      <div className="accepted-offer">
        <span>Onaylandı</span>
      </div>
    );
  }
  if (status === "rejected") {
    return (
      <div className="rejected-text">
        <span>Reddedildi</span>
      </div>
    );
  }

  if (status === "offered") {
    console.log("object")
    return (
      <div className="received-offers__item-buttons ">
        <button onClick={() => acceptOffer(id)}>Onayla</button>
        <button onClick={() => rejectOffer(id)}>Reddet</button>
      </div>
    );
  }
}
