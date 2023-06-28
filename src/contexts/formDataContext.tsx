"use client"

import React, { createContext, useState } from "react";

export const FormDataContext = createContext({
    formData: {},
    setFormData: ( value: object ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function FormDataContextProvider ( { children }: ProviderProps ) {
    const [ formData, setFormData ] = useState({})
    return (
        <FormDataContext.Provider value={ { formData, setFormData } }>
            { children }
        </FormDataContext.Provider>
    )
}