import { InputHTMLAttributes } from "react"
import { styled } from "styled-components"

const TagInput = styled.input`
    width: 30rem;
    height: 4rem;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    padding: 1rem 1.5rem;
    background-color: var(--dark-white);
    color: var(--dark-gray);

    &:focus {
        outline: none;
        border: 1px solid var(--light-orange);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInput ( props: InputProps ) {
    return (
        <TagInput { ...props } />
    )
}