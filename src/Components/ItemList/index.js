import React from "react";
import {Item} from "../Item/Item"

const ItemList = ({listProducts} ) => {
        

        return (
                <>
                        {listProducts.map((prod) => <Item key={prod.id} product={prod} />)}
                </>
        ) }

        export {ItemList}