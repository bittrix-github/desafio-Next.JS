"use client"

import React, { createContext, useState } from "react";

export const modalContext = createContext({
    modal: false,
    setModal: ( value: boolean ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function ModalContextProvider ( { children }: ProviderProps ) {
    const [ modal, setModal ] = useState(false)
    return (
        <modalContext.Provider value={ { modal, setModal } }>
            { children }
        </modalContext.Provider>
    )
}