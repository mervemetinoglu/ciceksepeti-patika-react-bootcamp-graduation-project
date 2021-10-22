import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4b9ce2;
  opacity: 0.7;
  transition: 200ms ease-in-out;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: ${(props) => (props.isOfferModal ? "30rem" : "23rem")};
  height: ${(props) => (props.isOfferModal ? "26rem" : "11rem")};
  // max-width: 50%;
  max-height: 60%;
  background-color: #fff;
  border-radius: 10px;
  transition: 200ms ease-in-out;
  opacity: 1;

  @media screen and (max-width: 480px) {
    width: 95%;
    top: ${(props) => (props.isOfferModal ? "28%" : "50%")};
  }
`;
