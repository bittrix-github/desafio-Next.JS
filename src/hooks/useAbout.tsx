import { aboutContext } from "@/contexts/aboutContext";
import { useContext } from "react";

export function useAbout () {
    return useContext( aboutContext )
}