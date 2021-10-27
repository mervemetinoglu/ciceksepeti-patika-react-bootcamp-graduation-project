import styled from "styled-components";
import thick from "../../assets/thick.svg";

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
  width: 93%;
  display: flex;
  flex-direction: column;
  margin-top: 17px;

  form {
    display: flex;
    flex-direction: column;
    Button {
      font-size: 1.1rem;
      width: 19rem;
      margin: 0 auto;
    }
  }

  .custom-offer__input {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 0.2rem;
    display: flex;
    color: #99a0a7;
    align-items: center;
    background-color: #f4f4f4;

    input {
      width: 95%;
      padding: 0.5rem;
      background-color: #f4f4f4;
      &::placeholder {
        color: #99a0a7;
      }
      &:focus {
        &::placeholder {
          color: transparent;
        }
      }
    }
  }

  .radiobtn {
    position: relative;
    display: block;

    label {
      display: block;
      color: #525252;
      border-radius: 8px;
      padding: 0.7rem 1rem;
      border: 1px solid #e0e0e0;
      margin-bottom: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:after {
        content: "";
        position: absolute;
        left: 11px;
        top: 11px;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 1px solid #b1b1b1;
        background: #fff;
        transition: 0.1s ease-in;
      }

      span {
        margin-left: 1.5rem;
      }
    }

    input[type="radio"] {
      display: none;
      position: absolute;
      width: 100%;
      appearance: none;

      &:checked + label {
        border-color: #4b9ce2;
        background-color: #f0f8ff;

        &:after {
          width: 1.5rem;
          height: 1.5rem;
          background: transparent;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 23px;
          margin-right: 10px;
          border-radius: 50%;
          background-image: url(${thick});
        }
      }
    }
  }
`;
