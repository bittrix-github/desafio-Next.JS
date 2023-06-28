import { burguerContext } from "@/contexts/burguerContext";
import { useContext } from "react";

export function useBurguer () {
    return useContext( burguerContext )
}