"use client"

import { styled } from "styled-components"
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ 
  weight: [ '300', '400', '500', '600' ],
  subsets: [ 'latin' ]
})

export const PrimaryButton = styled.button.attrs(() => ({
    className: quick.className
}))`
    width: 20rem;
    padding: 1rem;
    border: none;
    border-radius: var(--border-radius);
    background-color: var(--strong-green);
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--full-white);
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: var(--dark-green);
    }
`