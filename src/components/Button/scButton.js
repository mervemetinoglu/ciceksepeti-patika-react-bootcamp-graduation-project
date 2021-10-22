import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 700;
  border-radius: 8px;
  width: 14.6rem;
  height: 2.6rem;
  cursor: pointer;
  font-family: "Nunito";
  background-color: ${(props) =>
    props.isPrimaryButton ? "#4b9ce2" : "#f0f8ff"};
  color: ${(props) => (props.isPrimaryButton ? " #fff" : "#4b9ce2")};
`;
