import styled from "styled-components";

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 500px;
  margin: auto;
  align-items: center;
  justify-items: center;
`;

export const Table = styled.div`
  div {
    height: 500px;
    width: 500px;
  }
  table {
    width: 500px;
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

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 200px;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: flex;
  width: 200px;
`;

export const Input = styled.input`
  padding: 0.5em 0 0.5em;
  color: black;
  background: papayawhip;
  border: none;

  width: 200px;
`;

export const Select = styled.select`
  padding: 0.5em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 200px;
`;

export const Message = styled.label`
  color: #d7141a;
  height: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
