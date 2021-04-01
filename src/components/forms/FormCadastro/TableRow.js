/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import Button from '../../commons/Button';
import Table from '../../commons/table';

function TableRow(props) {
  const { user, onDelete } = props;
  const {
    nome,
    dataNascimento,
    uf,
    city,
  } = user;
  return (
    <Table.Tr>
      <Table.Td>{nome}</Table.Td>
      <Table.Td>{dataNascimento}</Table.Td>
      <Table.Td>{uf}</Table.Td>
      <Table.Td>{city}</Table.Td>
      <Table.Td>
        <Button
          ghost
          onClick={onDelete}
          variant="primary.main"
          type="submit"
        >
          Excluir
        </Button>
      </Table.Td>
    </Table.Tr>
  );
}
export default TableRow;
