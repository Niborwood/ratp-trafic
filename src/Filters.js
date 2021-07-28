import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    Button,
    HStack,
} from "@chakra-ui/react"


function Filters({ sortByTrafic, sortByArea, traficSort, areaSort, resetFilters }) {
    return (
        <HStack justify="center">
            <Menu>
                <MenuButton as={Button} colorScheme="teal">
                    Trier par...
                </MenuButton>
                <MenuList width="240px">
                    <MenuOptionGroup defaultValue={traficSort} title="Par trafic" type="radio" >
                        <MenuItemOption
                            value="-rang"
                            onClick={
                                (event) => {
                                    sortByTrafic(event.currentTarget.value)
                                }
                            }>Décroissant</MenuItemOption>
                        <MenuItemOption
                            value="rang"
                            onClick={
                                (event) => {
                                    sortByTrafic(event.currentTarget.value)
                                }
                            }>Croissant</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup defaultValue={areaSort} title="Par ville" type="radio">
                        <MenuItemOption
                        value="null"
                        onClick={(event) => {
                            sortByArea(event.currentTarget.value)
                        }}
                        >Tous</MenuItemOption>
                        <MenuItemOption
                        value="paris"
                        onClick={(event) => {
                            sortByArea(event.currentTarget.value)
                        }}
                        >Paris</MenuItemOption>
                        <MenuItemOption
                        value="banlieue"
                        onClick={(event) => {
                            sortByArea(event.currentTarget.value)
                        }}
                        >Banlieue</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
            <Button onClick={resetFilters} colorScheme="teal" variant="outline">Réinitialiser les filtres</Button>
        </HStack>
    )
}

Filters.propTypes = {
    sortByTrafic: PropTypes.func.isRequired,
    sortByArea: PropTypes.func.isRequired,
    traficSort: PropTypes.string.isRequired,
    areaSort: PropTypes.string.isRequired,
    resetFilters: PropTypes.func.isRequired,
}

export default Filters;

