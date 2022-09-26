import { columnHeaders, curencyInfo } from "../utils/types";
import { Table } from "./styles";

// Typescript helps us enforce column headers based on info string
// Obviously this is a contrived example, but it's a good example of how you can use
// typescript to empower other developers
const columns: columnHeaders = {
  Country: "Country",
  Currency: "Currency",
  Code: "Code",
  Amount: "Amount",
  Rate: "Rate",
};

export function TableView({ data }: { data: (curencyInfo | null)[] }) {
  return (
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
  );
}
