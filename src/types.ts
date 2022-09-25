export type valueof<T> = T[keyof T];

export type curencyInfo = {
  Country: string;
  Currency: string;
  Amount: string;
  Code: string;
  Rate: string;
};

// Was using this as a small utility function to get the value of a key in an object

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
