import { modalContext } from "@/contexts/modalContext";
import { useContext } from "react";

export function useModal () {
    return useContext( modalContext )
}