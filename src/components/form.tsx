import { useEffect, useState } from "react";
import { formatNumberToCurrency } from "../utils/function";
import { countryPropInfo } from "../utils/types";
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
  setResultData,
}: {
  countryAndCurrencyList: countryPropInfo[] | undefined;
  setResultData: React.Dispatch<
    React.SetStateAction<{
      fromCurrencyAmmount: string;
      toCurrencyAmount: string;
    }>
  >;
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

    // validate input amount is a number
    if (!isNaN(amount)) {
      const countryInfo = countryAndCurrencyList?.find(
        (item) => item.Country === country
      );
      if (!countryInfo) return;

      // Format currency amounts to base country
      // Hard coding the Czech Republic as the base currency
      const fromCurrencyAmmount = formatNumberToCurrency(amount, "CZK");

      // Convert amount to related country
      const convertedAmount = amount / Number(countryInfo.Rate);

      // Formatted calculated amount to related country
      const toCurrencyAmount = formatNumberToCurrency(
        convertedAmount,
        countryInfo.Code
      );

      // return info
      setResultData({
        fromCurrencyAmmount,
        toCurrencyAmount,
      });
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
            <Label htmlFor="label">Country From</Label>
            <Select disabled>
              <option value="grapefruit"> 🇨🇿 Czech Republic</option>
            </Select>
            <Message></Message>
          </InputWrapper>
        </GridWrapper>
        <GridWrapper>
          <InputWrapper>
            <Label htmlFor="label">Country To</Label>
            <Select name="country">
              {countryAndCurrencyList?.map((info, index) => (
                <option key={index} value={info.Country}>
                  {info.Country}
                </option>
              ))}
            </Select>
          </InputWrapper>
          <Button type="submit" label="Convert" error={inputError}></Button>
        </GridWrapper>
      </FormGroup>
    </form>
  );
}
