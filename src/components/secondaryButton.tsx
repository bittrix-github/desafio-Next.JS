"use client"

import { styled } from "styled-components"
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ 
  weight: [ '300', '400', '500', '600' ],
  subsets: [ 'latin' ]
})

export const SecondaryButton = styled.button.attrs(() => ({
    className: quick.className
}))`
    min-width: 8rem;
    padding: 0.4rem 1rem;
    border: 1px solid var(--strong-burple);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 600;
    color: var(--strong-burple);
    background-color: transparent;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: var(--light-burple);
    }
`
