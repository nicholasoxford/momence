import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { fetchCurrencyInfo } from "./utils/function";
import { Form, Spinner, TableView } from "./components";
import { useState } from "react";
import { Container } from "./components/styles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main></Main>
    </QueryClientProvider>
  );
}

function Main() {
  let { data, isLoading, error } = useQuery("repoData", fetchCurrencyInfo);
  const [currencyConversion, setCurrencyConversion] = useState({
    fromCurrencyAmmount: "",
    toCurrencyAmount: "",
  });
  return (
    <Container>
      <h2>Czech National Bank Currency Converter</h2>
      {isLoading && <Spinner></Spinner>}
      {error ? <div>Something went wrong</div> : null}
      {data && (
        <>
          {" "}
          <Form
            countryAndCurrencyList={data?.map((info) => {
              return {
                Code: info?.Code || "",
                Country: info?.Country || "",
                Rate: info?.Rate || "",
              };
            })}
            setResultData={setCurrencyConversion}
          ></Form>
          {currencyConversion.fromCurrencyAmmount && (
            <strong>
              {currencyConversion.fromCurrencyAmmount} is equal to{" "}
              {currencyConversion.toCurrencyAmount}
            </strong>
          )}
          <TableView data={data} />
        </>
      )}
    </Container>
  );
}
export default App;
