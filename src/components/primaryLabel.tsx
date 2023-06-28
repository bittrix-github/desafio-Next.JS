import { LabelHTMLAttributes } from "react"
import { styled } from "styled-components"

const TagLabel = styled.label`
    font-size: 1.8rem;
    color: var(--dark-gray);
    cursor: pointer;
`

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    text: string,
    htmlFor: string
}

export function PrimaryLabel ( props: LabelProps ) {
    return (
        <TagLabel { ...props }> { props.text } </TagLabel>
    )
}