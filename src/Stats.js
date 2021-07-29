import React from 'react'
import { Stat, StatGroup, StatLabel, StatNumber, Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';


function Stats({ totalStations, displayedStations, traficSort, areaSort }) {
    let percentOfStations = Math.round(displayedStations / totalStations * 100);
    if (percentOfStations === 0 && displayedStations > 0) {
        percentOfStations = 1;
    }

    return (
        <StatGroup border="1px" borderColor="teal.500" borderRadius="md" padding={4}>

            <Stat mb={{base:4, sm:0}}>
                <StatLabel>{displayedStations === 1 ? 'Station affichée' : 'Stations Affichées'}</StatLabel>
                <StatNumber>{displayedStations}</StatNumber>
                <Badge colorScheme={displayedStations === 0 ? 'red' : 'gray'}>{percentOfStations}% des stations totales</Badge>
            </Stat>

            <Stat>
                <StatLabel>Tri par rang</StatLabel>
                <StatNumber>{traficSort === 'rang' ? 'Croissant' : 'Décroissant'}</StatNumber>
                <Badge colorScheme="teal">Trafic</Badge>
            </Stat>

            <Stat>
                <StatLabel>Filtre géographique</StatLabel>
                <StatNumber textTransform='capitalize'>{areaSort === 'null' ? 'Toutes zones' : areaSort}</StatNumber>
                <Badge colorScheme="teal">Zone</Badge>
            </Stat>

        </StatGroup>
    )
}

Stats.propTypes = {
    totalStations: PropTypes.any,
    displayedStations: PropTypes.number.isRequired,
    traficSort: PropTypes.string.isRequired,
    areaSort: PropTypes.string.isRequired
};

export default Stats
