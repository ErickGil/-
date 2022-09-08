import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Banner = () =>{
    return (
        <>
            <div style ={style.container}>
                    <span>
                        <p>
                            < AcUnitIcon /> Confiabilidad y Calidad < AcUnitIcon/>
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
        backgroundColor : '#76B1E0',
    }, 
}

export default Banner
