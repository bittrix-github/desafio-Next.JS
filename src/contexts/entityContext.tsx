"use client"

import { EntityType } from "@/types/entityTypes";
import React, { createContext, useState } from "react";

export const EntityContext = createContext({
    entity: EntityType.Cliente,
    setEntity: ( value: EntityType ) => {}
})

interface ProviderProps {
    children: React.ReactNode
}

export function EntityContextProvider ( { children }: ProviderProps ) {
    const [ entity, setEntity ] = useState(EntityType.Cliente)
    return (
        <EntityContext.Provider value={ { entity, setEntity } }>
            { children }
        </EntityContext.Provider>
    )
}