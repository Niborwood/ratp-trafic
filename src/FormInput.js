import React from 'react'
import { Input, Button, HStack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'


function FormInput({ value, handleChange, onSubmitForm }) {


    return (
        <>
            <form action="">
                <HStack>
                    <Input
                        placeholder="Nom de la gare (sans accents)"
                        size="md"
                        variant="filled"
                        focusBorderColor="teal.400"
                        value={value}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        px={8}
                        leftIcon={<SearchIcon />}
                        colorScheme="teal"
                        variant="solid"
                        onClick={onSubmitForm}>
                        Rechercher
                    </Button>
                </HStack>
            </form>
        </>
    )
}

FormInput.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired
}

export default FormInput

