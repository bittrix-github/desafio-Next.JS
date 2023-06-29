"use client"

import { styled } from "styled-components"

export const FormContainer = styled.form`
    position: fixed;
    width: 100%;
    padding: 5rem 5vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    z-index: 4;
    background-color: var(--full-white);
    height: calc(100vh - 16rem);
    overflow-y: auto;

    & h2 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--dark-gray);
        margin-bottom: 3rem;
    
`