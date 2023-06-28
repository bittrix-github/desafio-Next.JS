import { MethodContext } from "@/contexts/methodContext";
import { useContext } from "react";

export function useMethod () {
    return useContext( MethodContext )
}