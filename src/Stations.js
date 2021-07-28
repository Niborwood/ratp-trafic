import React from 'react';
import PropTypes from 'prop-types'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Alert,
  AlertIcon,
} from "@chakra-ui/react"

function Station({ stationsData }) {
  const upperCaseToEveryWord = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const stationsList = stationsData.map((station) => {
    return (
      <Tr key={station.recordid}>
        <Td>{upperCaseToEveryWord(station.fields.station.toLowerCase())}</Td>
        <Td>{station.fields.ville} {station.fields.arrondissement_pour_paris ? `(${station.fields.arrondissement_pour_paris})` : null}</Td>
        <Td isNumeric >{station.fields.trafic.toLocaleString()}</Td>
        <Td isNumeric>{station.fields.rang}</Td>
      </Tr>
    )
  });

  return (
    stationsList.length === 0 ?
      <Alert status="error" variant="left-accent">
        <AlertIcon />
        Aucune gare ne contient ces termes.
      </Alert>
      :
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Trafic par station de métro, sur l'année 2020 (Source : RATP)</TableCaption>
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Ville</Th>
            <Th isNumeric>Trafic</Th>
            <Th isNumeric>Rang</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stationsList}
        </Tbody>
      </Table>
  )
}

Station.propTypes = {
  stationsData: PropTypes.array.isRequired,
}

export default Station;

