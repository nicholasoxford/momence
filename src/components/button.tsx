import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  width: 200px;
  button {
    display: inline-block;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 1px solid #11457e;
    border-radius: 3px;
    background-color: #11457e;
    display: block;
    max-width: 100px;

    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export function Button({
  label,
  type,
}: {
  label: string;
  type: "submit" | "reset" | "button" | undefined;
}) {
  return (
    <ButtonWrapper>
      <button type={type}>{label}</button>
    </ButtonWrapper>
  );
}
