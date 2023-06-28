"use client"

import React, { createContext, useState } from "react";

export const idContext = createContext({
    idd: 0,
    setIdd: ( value: number ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function IdContextProvider ( { children }: ProviderProps ) {
    const [ idd, setIdd ] = useState(0)
    return (
        <idContext.Provider value={ { idd, setIdd } }>
            { children }
        </idContext.Provider>
    )
}