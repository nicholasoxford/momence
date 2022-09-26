import styled from "styled-components";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { fetchUsers } from "./utils/function";
import { Form, Spinner, TableView, S } from "./components";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <S.Title>Momence Interview </S.Title>
      <Main></Main>
    </QueryClientProvider>
  );
}

function Main() {
  let { data, status, isLoading } = useQuery("repoData", fetchUsers);
  const [currencyConversion, setCurrencyConversion] = useState({
    country: "",
    currency: "",
    amount: 0,
    rate: 0,
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Czech National Bank</h2>
      <p>Status: {status}</p>
      {isLoading && <Spinner></Spinner>}
      {data && (
        <>
          {" "}
          <Form
            countryAndCurrencyList={data?.map((info) => {
              return {
                country: info?.Country || "",
                currency: info?.Currency || "",
              };
            })}
          ></Form>
          <TableView data={data} />
        </>
      )}
    </div>
  );
}
export default App;
