import { FormDataContext } from "@/contexts/formDataContext";
import { useContext } from "react";

export function useFormData () {
    return useContext( FormDataContext )
}