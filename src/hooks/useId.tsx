import { idContext } from "@/contexts/idContext";
import { useContext } from "react";

export function useIdd () {
    return useContext( idContext )
}