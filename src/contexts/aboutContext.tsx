"use client"

import React, { createContext, useState } from "react";

export const aboutContext = createContext({
    about: true,
    setAbout: ( value: boolean ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function AboutContextProvider ( { children }: ProviderProps ) {
    const [ about, setAbout ] = useState(true)
    return (
        <aboutContext.Provider value={ { about, setAbout } }>
            { children }
        </aboutContext.Provider>
    )
}