import styled from "styled-components";

export const StyledLoader = styled.div`
  margin: 0 auto;
  width: 5rem;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderWheel = styled.div`
  animation: spin 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.233);
  border-left: 4px solid #4b9ce2;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
`;
