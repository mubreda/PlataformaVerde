/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Body = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  `;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;

  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const Table = {
  Body, Td, Th, Tr,
};

export default Table;
