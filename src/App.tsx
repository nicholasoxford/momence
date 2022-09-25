import styled from "styled-components";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./App.css";
import { curencyInfo } from "./types";
const queryClient = new QueryClient();

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const THead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

const TR = styled.tr`
  padding: 12px 15px;
`;

const TD = styled.td`
  padding: 12px 15px;
`;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title>HEllo from the other side</Title>
      <DataDisplay></DataDisplay>
    </QueryClientProvider>
  );
}

// valueof
const fetchUsers = async () => {
  const res = await fetch("/daily.txt");
  const textInfo = await res.text();
  const textArray = textInfo.split(/\r?\n/);
  // if is not equeal to type textFormat return
  const result = textArray.map((item, index) => {
    if (index === 0) return null;

    if (item !== "Country|Currency|Amount|Code|Rate") {
      // parse the text into type extracTData
      const parsedText: curencyInfo = {
        Country: item.split("|")[0],
        Currency: item.split("|")[1],
        Amount: item.split("|")[2],
        Code: item.split("|")[3],
        Rate: item.split("|")[4],
      };
      return parsedText;
    }
    return null;
  });
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
      <h2>React Query</h2>
      <p>Status: {status}</p>
      <Table>
        <THead>
          <TR>
            <th>Country</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Code</th>
            <th>Rate</th>
          </TR>
        </THead>
        <tbody>
          {data &&
            data.map(
              (countryInfo, key) =>
                countryInfo && (
                  <tr key={key}>
                    <TD>{countryInfo.Country}</TD>
                    <TD>{countryInfo.Currency}</TD>
                    <TD>{countryInfo.Amount}</TD>
                    <TD>{countryInfo.Code}</TD>
                    <TD>{countryInfo.Rate}</TD>
                  </tr>
                )
            )}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
