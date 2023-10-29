import React, { useContext, useState } from "react";

type ValueProp = {
    collegeName: string;
    setCollege: React.Dispatch<React.SetStateAction<string>>;
}

type ContextProp = {
    children: React.ReactNode
} 

export const AppContext = React.createContext({} as ValueProp); //create the context API

//function bodys
export default function Context({ children }: ContextProp) {

const [ collegeName, setCollege ] = useState<string>('');

    return (
        <AppContext.Provider value={{collegeName, setCollege}}>
            {children}
         </AppContext.Provider>
    )
}

export const useGlobalContext = ():ValueProp => {
    return useContext(AppContext);
}