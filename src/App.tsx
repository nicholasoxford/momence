import styled from "styled-components";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { columnHeaders, curencyInfo } from "./types";
import { Table } from "./components/table";
const queryClient = new QueryClient();

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title>HEllo from the other side</Title>
      <DataDisplay></DataDisplay>
    </QueryClientProvider>
  );
}

// because this is type columnHeaders, if we try to pass in
// a header that doesnt relate to the type, it will throw a compile error
const columns: columnHeaders = {
  Country: "Country",
  Currency: "Currency",
  Code: "Code",
  Amount: "Amount",
  Rate: "Rate",
};

// valueof
const fetchUsers = async () => {
  const res = await fetch("/daily.txt");
  const textInfo = await res.text();
  const textArray = textInfo.split(/\r?\n/);
  // if is not equeal to type textFormat return
  const result = textArray.map((item, index) => {
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
  console.log(result);
  return result;
};

function DataDisplay() {
  const { data, status } = useQuery("repoData", fetchUsers);

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
      <Table>
        <table>
          <thead>
            <tr>
              {Object.values(columns).map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (countryInfo, index) =>
                countryInfo && (
                  <tr key={index}>
                    <td>{countryInfo?.Country}</td>
                    <td>{countryInfo?.Currency}</td>
                    <td>{countryInfo?.Code}</td>
                    <td>{countryInfo?.Amount}</td>
                    <td>{countryInfo?.Rate}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </Table>
    </div>
  );
}
export default App;
