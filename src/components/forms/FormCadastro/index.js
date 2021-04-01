/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import Button from '../../commons/Button';
import Table from '../../commons/table';
import CidadeEstado from '../CidadeEstado';
import TextField from '../TextField';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import TableRow from './TableRow';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    dataNascimento: '',
    uf: 'Acre',
    city: 'Acrelândia',
  });

  const [userList, setUserList] = React.useState([]);

  function addToUserList(user) {
    const newList = Array.from(userList);
    newList.push(user);
    setUserList(newList);
  }

  const deleteTask = (index) => {
    const newList = Array.from(userList);
    newList.splice(index, 1);
    setUserList(newList);
  };

  function saveUser() {
    const {
      nome,
      dataNascimento,
      uf,
      city,
    } = userInfo;

    const user = {
      nome,
      dataNascimento,
      uf,
      city,
    };

    addToUserList(user);
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.nome.length === 0 || userInfo.dataNascimento.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <Text
          variant="paragraph1"
          tag="label"
          color="tertiary.main"
        >
          Nome Completo
        </Text>
        <TextField
          type="text"
          placeholder="Informe seu nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <Text
          variant="paragraph1"
          tag="label"
          color="tertiary.main"
        >
          Data de Nascimento
        </Text>
        <TextField
          type="date"
          name="dataNascimento"
          placeholder="dd/mm/aaaa"
          value={userInfo.dataNascimento}
          onChange={handleChange}
        />
      </div>
      <CidadeEstado
        uf={userInfo.uf}
        city={userInfo.city}
        setUf={handleChange}
        setCity={handleChange}
      />
      <Grid.Col
        value={{ xs: 6 }}
        offset={{ xs: 6, md: 9 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Button
          onClick={saveUser}
          variant="primary.main"
          type="submit"
          disabled={isFormInvalid}
          fullWidth
        >
          Cadastrar
        </Button>
      </Grid.Col>
      <br />
      <br />
      <Table.Body>
        <thead>
          <Table.Tr>
            <Table.Th>Nome Completo</Table.Th>
            <Table.Th>Data</Table.Th>
            <Table.Th>Estado</Table.Th>
            <Table.Th>Cidade</Table.Th>
            <Table.Th>Excluir</Table.Th>
          </Table.Tr>
        </thead>
        <tbody>
          {userList.map((user_, index) => (
            <TableRow
              key={user_.nome}
              user={user_}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </tbody>
      </Table.Body>
    </form>
  );
}

export default function FormCadastro() {
  return (
    <Grid.Container>
      <FormContent />
    </Grid.Container>
  );
}
