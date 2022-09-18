import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button

} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


const Dropdown = () => {
    return (
        <>
            <Menu  >
                {({ isOpen }) => (
                    <>
                        <MenuButton isActive={isOpen} as={Button}fontSize={20} colorScheme='red' _focus={{
                            backgroundColor: "#9B2C2C",
                        }} rightIcon={<ChevronDownIcon />}>
                            {isOpen ? 'Close' : 'Productos'}
                        </MenuButton>
                        <MenuList color="Black" fontSize={18} p={5}>
                            <MenuItem>Bidones</MenuItem>
                            <MenuItem>Bolsas</MenuItem>
                            <MenuItem>Barras</MenuItem>
                            
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}

export { Dropdown }


