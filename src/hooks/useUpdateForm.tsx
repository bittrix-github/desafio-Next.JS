import { updateFormContext } from "@/contexts/updateFormContext";
import { useContext } from "react";

export function useUpdateForm () {
    return useContext( updateFormContext )
}