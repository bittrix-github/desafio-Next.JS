import { EntityContext } from "@/contexts/entityContext";
import { useContext } from "react";

export function useEntity () {
    return useContext( EntityContext )
}