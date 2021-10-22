import styled from "styled-components";

export const WrapperOfferModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #525252;
  font-weight: 700;
  font-size: 1.5rem;

  .close-btn {
    color: #525252;
    cursor: pointer;
  }
`;

export const ProductInfo = styled.div`
  width: 93%;
  background-color: #f0f8ff;
  padding: 0 0.7rem;
  margin: 0 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555555;

  div {
    &:first-child {
      display: flex;
      text-transform: capitalize;
      font-size: 0.8rem;

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        border-radius: 8px;
        padding: 0.2rem 0;
        margin-right: 0.2rem;
      }
    }
  }

  .price {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const WrapperOfferSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 17px;

  form {
    display: flex;
    flex-direction: column;
    Button {
      font-size: 1.1rem;
      width: 19rem;
    }
  }

  .customOffer {
    position: relative;
    padding: 0.7rem 0.7rem;
    margin: 0 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 10px;
    color: #525252;
    input {
      width: 100%;
      height: 100%;
    }
  }
`;

export const OfferOption = styled.div`
  position: relative;
  display: block;
  margin: 0 1rem;

  label {
    display: block;
    color: #525252;
    border-radius: 8px;
    padding: 0.7rem 3rem;
    border: 1px solid #e0e0e0;
    margin-bottom: 10px;
    cursor: pointer;

    &:after,
    &:before {
      content: "";
      position: absolute;
      left: 0.8rem;
      top: 0.8rem;
      width: 1.2rem;
      height: 1.2rem;
    }
    &:after {
      background: transparent;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 13px;
      background-position: center;
      width: 0;
      height: 0;
      background-image: url("../../assets/thick.svg");
    }
  }

  input[type="radio"] {
    display: none;
    position: absolute;
    width: 100%;

    &:checked ~ label {
      border-color: #4b9ce2;
      background-color: #f0f8ff;
      &:after {
        background: red;
      }
      &:before {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
