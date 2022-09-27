import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button

} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const categorias = [ 
        {id:0, nombre:"Bidones", rutas:"/categoria/bidones"},{id:1, nombre:"Bolsas", rutas:"/categoria/bolsas"},{id:2, nombre:"Barras", rutas:"/categoria/barras"},
   ]

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
                        {categorias.map((categoria) =>{
                            return <MenuItem key={categoria.id}  ><Link  style={style.estilosLetras} to={categoria.rutas} >{categoria.nombre} </Link></MenuItem>
                                    }  )  }
                        </MenuList>
                    </>
                )}
            </Menu>
        </>
    )
}
const style = {
    estilosLetras:{
        color: 'black',
        fontSize: '15px ',
    },
}

export { Dropdown }


