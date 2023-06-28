"use client"

import React, { createContext, useState } from "react";

export const registerFormContext = createContext({
    registerForm: false,
    setRegisterForm: ( value: boolean ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function RegisterFormContextProvider ( { children }: ProviderProps ) {
    const [ registerForm, setRegisterForm ] = useState(false)
    return (
        <registerFormContext.Provider value={ { registerForm, setRegisterForm } }>
            { children }
        </registerFormContext.Provider>
    )
}