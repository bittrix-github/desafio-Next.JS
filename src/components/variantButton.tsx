"use client"

import { styled } from "styled-components"
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ 
  weight: [ '300', '400', '500', '600' ],
  subsets: [ 'latin' ]
})

export const VariantButton = styled.button.attrs(() => ({
    className: quick.className
}))`
  width: 20rem;
  padding: 1rem;
  border: 1px solid var(--strong-green);
  border-radius: var(--border-radius);
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--strong-green);
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: var(--light-green);
  }
`