import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px solid grey;
  background-color: white;
`;

export const TableHead = styled.thead`
  height: 40px;
  background-color: #a1a1f5;
  text-align: center;
  text-transform: uppercase;
  color: grey;
  th {
    :not(:last-child) {
      border-right: 1px solid grey;
    }
  }
`;

export const TableItem = styled.tr`
  text-align: center;
  :nth-of-type(even) {
    background-color: #f4f4f4;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid grey;
    }
  }
`;
