import { registerFormContext } from "@/contexts/registerFormContext";
import { useContext } from "react";

export function useRegisterForm () {
    return useContext( registerFormContext )
}