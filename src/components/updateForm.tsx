"use client"

import { useUpdateForm } from "@/hooks/useUpdateForm"
import { FormContainer } from "./primaryForm"
import { FormList } from "./updateFormBuilder"

interface FormProps {

}

export function UpdateForm ( props: FormProps ) {

    const { updateForm, setUpdateForm } = useUpdateForm()

    if ( updateForm ) {
        return (
            <FormContainer>
                <FormList/>
            </FormContainer>
        )
    }
}