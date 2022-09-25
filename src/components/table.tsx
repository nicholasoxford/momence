import styled from "styled-components";

/* Pssst this has the rest of the styling we've been using
to give our table borders and non-ugly spacing */

export const Table = styled.div`
  div {
    height: 500px;
  }
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    tr {
      padding: 12px 15px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    thead {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
      height: 25px;
      font-weight: bold;
    }
    tbody {
      tr {
        text-align: center;
    }
    td {
      padding: 12px 15px;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
