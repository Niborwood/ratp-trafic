import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  ChakraProvider,
  Stack,
  Text,
  theme,
  Heading,
  HStack,
  Divider,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Stations from './Stations';
import FormInput from './FormInput'
import Stats from './Stats';
import Filters from './Filters';

function App() {

  const [value, setValue] = useState("");
  const [confirmedValue, setConfirmedValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const [stationsData, setStationsData] = useState([]);
  const [areStationsLoading, setAreStationsLoading] = useState(false);
  const [totalStations, setTotalStations] = useState('null');
  const [traficSort, setTraficSort] = useState('-rang');
  const [areaSort, setAreaSort] = useState('null');

  const loadData = () => {
    setAreStationsLoading(true);

    // Add Area Param to API URL
    let areaParam = '';
    switch (areaSort) {
      case 'paris':
        areaParam = '&refine.ville=Paris';
        break;

      case 'banlieue':
        areaParam = '&exclude.ville=Paris';
        break;
    
      default:
        break;
    }

    axios.get(`https://data.ratp.fr/api/records/1.0/search/?dataset=trafic-annuel-entrant-par-station-du-reseau-ferre-2020&q=&sort=${traficSort}&rows=305&facet=reseau&facet=station&facet=ville&facet=arrondissement_pour_paris&refine.reseau=M%C3%A9tro${areaParam}`)
      .then(response => {
        if (totalStations === 'null') {
          setTotalStations(response.data.nhits);
        }

        const stationsRecords = response.data.records;
        if (!value) {
          setStationsData(stationsRecords)
        } else {
          const filteredStations = stationsRecords.filter(station => station.fields.station.toLowerCase().includes(confirmedValue.toLowerCase()));
          setStationsData(filteredStations);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setAreStationsLoading(false);
      });
   
  }

  // Load Data on init & on every state change
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traficSort, areaSort, confirmedValue]);

  // SORTING AND FILTERING
  const handleFormSubmit = (event) => {
    setAreStationsLoading(true);
    event.preventDefault();
    setConfirmedValue(value);
    loadData();
  }

  const sortByTrafic = (value) => {
    setAreStationsLoading(true);
    setTraficSort(value);
  }

  const sortByArea = (value) => {
    setAreStationsLoading(true);
    setAreaSort(value);
  }

  const resetFilters = () => {
    setAreStationsLoading(true);
    setValue('');
    setConfirmedValue('');
    setAreaSort('null');
    setTraficSort('-rang');
  }

  // RETURN

  return (
    <ChakraProvider theme={theme}>
      <Stack textAlign="center" align="center" min-h="100vh">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Stack spacing={4} w={{base:"xs", md:"lg"}}>
          <Heading as="h1" size="2xl" isTruncated>
            <HStack justify="center" mb={8}>
              <Text color="teal.500">RATP</Text> <Text>Metro Traffic</Text>
            </HStack>
          </Heading>
          <FormInput value={value} handleChange={handleChange} onSubmitForm={handleFormSubmit} />
          {/* <Divider /> */}

          {areStationsLoading ?
            <HStack justify="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="teal.500"
                size="xl"
                align="center"
              />
            </HStack>
            :
            <>
              <Stats totalStations={totalStations} displayedStations={stationsData.length} traficSort={traficSort} areaSort={areaSort} />
              <Filters 
              sortByTrafic={sortByTrafic} 
              traficSort={traficSort} 
              areaSort={areaSort}
              sortByArea={sortByArea}
              resetFilters={resetFilters}
               />
              <Divider />
              <Stations
                stationsData={stationsData}
              />
            </>}
          <Text fontSize="xs">By Robin Souriau</Text>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
