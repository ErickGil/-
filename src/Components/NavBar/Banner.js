import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Text } from '@chakra-ui/react'
const Banner = () =>{
    return (
        <>
            <div style ={style.container}>
                    <span>
                        <p>
                            < AcUnitIcon /><Text as='cite'>CONFIABILIDAD Y CALIDAD</Text> < AcUnitIcon/>
                        </p>
                    </span>
                </div>
                
        </>
    )
}
const style = {
    container : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '10px',
        paddingBottom : '56px',
        backgroundColor : '#76B1E0',
    }, 
}

export default Banner
