import { StyledButton } from "./scButton";

const Button = ({ isPrimaryButton, text, onClick }) => {
  return (
    <StyledButton isPrimaryButton={isPrimaryButton} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
