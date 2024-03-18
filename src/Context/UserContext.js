import React, { createContext } from "react";
import all_product from '../components/Assets1/all_product'

export const UserContext = createContext(null);


 const UserContextProvider = (props)=>{

     const contextValue = {all_product};

     return(
        <UserContext.Provider value={contextValue}>
             {props.children}
        </UserContext.Provider>
    )
 }
 export default UserContextProvider