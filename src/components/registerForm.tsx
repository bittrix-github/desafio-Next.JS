"use client"

import { useRegisterForm } from "@/hooks/useRegisterForm"
import { FormContainer } from "./primaryForm"
import { FormList } from "./registerFormBuilder"

interface FormProps {

}

export function RegisterForm ( props: FormProps ) {

    const { registerForm, setRegisterForm } = useRegisterForm()

    if ( registerForm ) {
        return (
            <FormContainer>
                <FormList/>
            </FormContainer>
        )
    }
}