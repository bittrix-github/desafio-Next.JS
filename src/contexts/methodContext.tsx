"use client"

import { MethodType } from "@/types/methodTypes";
import React, { createContext, useState } from "react";

export const MethodContext = createContext({
    method: MethodType.GET,
    setMethod: ( value: MethodType ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function MethodContextProvider ( { children }: ProviderProps ) {
    const [ method, setMethod ] = useState(MethodType.GET)
    return (
        <MethodContext.Provider value={ { method, setMethod } }>
            { children }
        </MethodContext.Provider>
    )
}