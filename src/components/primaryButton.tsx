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
    border: 1px solid var(--dark-gray);
    border-radius: var(--border-radius);
    background-color: var(--dark-white);
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--dark-gray);
    cursor: pointer;
`