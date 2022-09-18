import React from "react";
import {  Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,useDisclosure,Divider, 
    ListItem,
    UnorderedList,Link  
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Dropdown } from "./dropdown";



const MenuResponsive = () => {



    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }


    return (
        <>
                <Button backgroundColor = "#2B6CB0"
                    onClick={() => handleClick("md")}
                    key={"md"}
                    m={4}
                    _focus={{
                        backgroundColor: "#4299E1",
                        }}
                ><HamburgerIcon  w={8} h={8} color="white" /></Button>
            

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Encargada Sonia Lazaro</DrawerHeader>
                    <DrawerBody>
                        <Divider />
                        <UnorderedList fontSize={20}>
                            <ListItem  pt={5}><Link>Inicio</Link></ListItem>
                            <ListItem pt={5}><Link>Sombre Nosotros</Link></ListItem>
                            <ListItem pt={5}><Dropdown/></ListItem>
                            <ListItem pt={5}> <i class="medium material-icons">shopping_cart</i></ListItem>
                        </UnorderedList>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export { MenuResponsive };