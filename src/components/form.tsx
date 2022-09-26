import { useEffect, useState } from "react";
import { formatNumberToCurrency } from "../utils/function";
import { Button } from "./button";
import {
  FormGroup,
  GridWrapper,
  Input,
  InputWrapper,
  Label,
  Message,
  Select,
} from "./styles";

export function Form({
  countryAndCurrencyList,
}: {
  countryAndCurrencyList: { country: string; currency: string }[] | undefined;
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    // parse out values for input amount
    const form = event.currentTarget;
    const result = form.elements as typeof form.elements & {
      amount: { value: string };
      country: { value: string };
    };
    const amount = Number(result.amount.value);
    const country = result.country.value;
    if (!isNaN(amount)) {
      console.log(formatNumberToCurrency(amount, country));
    }
  }

  // useeffect is inputValue isnt a number setInputHasError(true)
  useEffect(() => {
    // try to parse a number from inputValue while user is typing
    if (isNaN(Number(inputValue))) {
      setInputError("Please enter a number");
    } else {
      setInputError("");
    }
  }, [inputValue]);
  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <GridWrapper>
          <InputWrapper>
            <Label htmlFor="label">Input Amount</Label>
            <Input
              name="amount"
              id="label"
              onChange={(e) => setInputValue(e.target.value)}
            />
            {<Message>{inputError} </Message>}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="label">Choose Country</Label>
            <Select disabled>
              <option value="grapefruit"> 🇨🇿 Czech Republic</option>
            </Select>
            <Message></Message>
          </InputWrapper>
        </GridWrapper>
        <GridWrapper>
          <InputWrapper>
            <Label htmlFor="label">Convert to</Label>
            <Select name="country">
              {countryAndCurrencyList?.map((info, index) => (
                <option key={index} value={info.country}>
                  {info.country}
                </option>
              ))}
            </Select>
          </InputWrapper>
          <Button type="submit" label="Convert"></Button>
        </GridWrapper>
      </FormGroup>
    </form>
  );
}

// Was going to use an svg but it didn't look good
// export const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 100%;
//   img {
//     width: 30px;
//     height: 30px;
//     margin-top: 10px;
//     margin-left: 10px;
//   }
// `;
