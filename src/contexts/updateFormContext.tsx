"use client"

import React, { createContext, useState } from "react";

export const updateFormContext = createContext({
    updateForm: false,
    setUpdateForm: ( value: boolean ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function UpdateFormContextProvider ( { children }: ProviderProps ) {
    const [ updateForm, setUpdateForm ] = useState(false)
    return (
        <updateFormContext.Provider value={ { updateForm, setUpdateForm } }>
            { children }
        </updateFormContext.Provider>
    )
}