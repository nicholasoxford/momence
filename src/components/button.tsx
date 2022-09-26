import { ButtonWrapper } from "./styles";

export function Button({
  label,
  type,
  error,
}: {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  error: string;
}) {
  return (
    <ButtonWrapper>
      <button type={type} disabled={error !== ""}>
        {label}
      </button>
    </ButtonWrapper>
  );
}
