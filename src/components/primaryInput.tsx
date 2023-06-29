import { InputHTMLAttributes } from "react"
import { styled } from "styled-components"
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ 
  weight: [ '300', '400', '500', '600' ],
  subsets: [ 'latin' ]
})

const TagInput = styled.input.attrs(() => ({
    className: quick.className
}))`
    width: 34rem;
    height: 4rem;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    padding: 1rem 1.5rem;
    background-color: var(--light-gray);
    color: var(--dark-gray);
    font-size: 1.6rem;

    &:focus {
        outline: none;
        border: 1px solid var(--strong-green);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInput ( props: InputProps ) {
    return (
        <TagInput { ...props } />
    )
}