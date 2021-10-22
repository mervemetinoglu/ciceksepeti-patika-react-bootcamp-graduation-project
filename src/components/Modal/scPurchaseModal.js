import styled from "styled-components";

export const WrapperPurchaseModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.5rem;
  text-align: center;
  color: #525252;
  h4 {
    font-weight: normal;
  }

  .buttons {
    display: flex;
    justify-content: center;

    Button {
      width: 10rem;
      font-size: 1rem;
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`;
