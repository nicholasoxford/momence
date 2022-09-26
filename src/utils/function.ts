import { curencyInfo } from "./types";

// Function we pass into react query
export const fetchCurrencyInfo = async () => {
  const res = await fetch("/daily.txt");
  const textInfo = await res.text();
  const textArray = textInfo.split(/\r?\n/);
  // if is not equeal to type textFormat return
  const result: (curencyInfo | null)[] = textArray.map((item, index) => {
    // first lets parse out the date

    // if the row isn't equal to the info row, return
    if (index !== 0 && item !== "Country|Currency|Amount|Code|Rate") {
      const parsedText: curencyInfo = {
        Country: item.split("|")[0],
        Currency: item.split("|")[1],
        Amount: item.split("|")[2],
        Code: item.split("|")[3],
        Rate: item.split("|")[4],
      };
      if (parsedText.Country === "" || parsedText.Currency === null)
        return null;
      return parsedText;
    }
    return null;
  });
  return result?.filter((element) => element !== null);
};

// I love built in browser APIs
export function formatNumberToCurrency(amount: number, country: string) {
  const formatterInternal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: country,
  });
  return formatterInternal.format(amount);
}
