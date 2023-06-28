"use client"

import { FilterEntity } from "./filterList"

interface NavBarProps {

}

export function NavBar ( props: NavBarProps ) {
    return (
        <nav>
            <FilterEntity/>
        </nav>
    )
}