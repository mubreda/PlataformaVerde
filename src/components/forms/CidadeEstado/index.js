/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

export default function CidadeEstado(props) {
  const {
    uf,
    city,
    setUf,
    setCity,
  } = props;

  const Select = styled.select`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 17px;
`;

  const [listUf, setListUf] = React.useState([]);
  const [listCity, setListCity] = React.useState([]);
  function loadUf() {
    let url = 'https://servicodados.ibge.gov.br/';
    url = `${url}api/v1/localidades/estados`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
      });
  }
  function loadCity(name) {
    const foundUf = listUf.find((uf_) => uf_.nome === name);
    if (!foundUf) return;
    let url = 'https://servicodados.ibge.gov.br/api/v1/';
    url = `${url}localidades/estados/${foundUf.id}/municipios`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity([...data]);
      });
  }
  React.useEffect(() => {
    loadUf();
  }, []);
  React.useEffect(() => {
    if (listUf && uf) {
      loadCity(uf);
    }
  }, [listUf, uf]);
  return (
    <div>
      <Text
        variant="paragraph1"
        tag="label"
        color="tertiary.main"
      >
        Estado
      </Text>
      <Select name="uf" value={uf} onChange={setUf}>
        {listUf.map((a) => (
          <option key={a.nome} value={a.nome}>
            {a.nome}
          </option>
        ))}
      </Select>
      <Text
        variant="paragraph1"
        tag="label"
        color="tertiary.main"
      >
        Cidade
      </Text>
      <Select name="city" value={city} onChange={setCity}>
        {listCity.map((a) => (
          <option key={a.nome} value={a.nome}>{a.nome}</option>
        ))}
      </Select>
    </div>
  );
}
