export type valueof<T> = T[keyof T];

export type curencyInfo = {
  Country: string;
  Currency: string;
  Amount: string;
  Code: string;
  Rate: string;
};

// Creating prop types based on parent types
export type countryPropInfo = Omit<curencyInfo, "Amount" | "Currency">;

// This type would be useful if another key was added to the response, i.e. Country|Currency|Amount|Code|Rate|Debt
export type extractData<currencyInfo extends string> =
  currencyInfo extends `${infer Country}|${infer Currency}|${infer Amount}|${infer Code}|${infer Rate}`
    ? {
        Country: Country;
        Currency: Currency;
        Amount: Amount;
        Code: Code;
        Rate: Rate;
      }
    : never;

export type textFormat = "Country|Currency|Amount|Code|Rate";

// getting our headers from the format string
export type columnHeaders = extractData<textFormat>;
