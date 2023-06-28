"use client"

import React, { createContext, useState } from "react";

export const burguerContext = createContext({
    burguer: false,
    setBurguer: ( value: boolean ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function BurguerContextProvider ( { children }: ProviderProps ) {
    const [ burguer, setBurguer ] = useState(false)
    return (
        <burguerContext.Provider value={ { burguer, setBurguer } }>
            { children }
        </burguerContext.Provider>
    )
}