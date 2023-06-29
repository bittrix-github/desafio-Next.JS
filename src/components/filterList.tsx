"use client"

import { useAbout } from "@/hooks/useAbout"
import { useBurguer } from "@/hooks/useBurguer"
import { useEntity } from "@/hooks/useEntity"
import { useFormData } from "@/hooks/useFormData"
import { useIdd } from "@/hooks/useId"
import { useMethod } from "@/hooks/useMethod"
import { useRegisterForm } from "@/hooks/useRegisterForm"
import { useUpdateForm } from "@/hooks/useUpdateForm"
import { EntityType } from "@/types/entityTypes"
import { MethodType } from "@/types/methodTypes"
import { styled } from "styled-components"

interface FilterEntityProps {

}

interface FilterItemProps {
    selected: boolean
}

interface FilterListProps {
    open: boolean
}

const FilterList = styled.ul<FilterListProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    padding: 0 5vw;
    background-color: var(--light-gray);

    @media (max-width: 800px) {
        ${ props => props.open ? 'display: flex;' : 'display: none;' }
        flex-direction: column;
        position: fixed;
        top: 8rem;
        padding: 15rem 5vw;
        z-index: 5;
        height: calc(100vh - 8rem);
    }
`

const FilterItem = styled.li<FilterItemProps>`
    list-style: none;
    font-size: 1.8rem;
    color: var(--dark-gray);
    font-weight: ${ props => props.selected ? '600;' : '500;' }
    cursor: pointer;
    border-bottom: ${ props => props.selected ? '0.3rem solid var(--strong-burple);' : '0.3rem solid transparent;' }
`

export function FilterEntity ( props: FilterEntityProps ) {
    const { entity, setEntity } = useEntity()
    const { setMethod } = useMethod()
    const { setIdd } = useIdd()
    const { setFormData } = useFormData()
    const { setAbout } = useAbout()
    const { setRegisterForm } = useRegisterForm()
    const { setUpdateForm } = useUpdateForm()
    const { burguer, setBurguer } = useBurguer()

    const changeEntityHandler = ( method: MethodType, entity: EntityType ) => {
        setMethod( method )
        setEntity( entity )
        setIdd( 0 )
        setFormData( { } )
        setAbout(false)
        setRegisterForm(false)
        setUpdateForm(false)
        setBurguer(false)
    }

    return (
        <FilterList open= { burguer }>
            <FilterItem
                selected={ entity === EntityType.Cliente }
                onClick={ () => { changeEntityHandler( MethodType.GET, EntityType.Cliente ) } }
            >
                Funcionários
            </FilterItem>
            <FilterItem
                selected={ entity === EntityType.Condutor }
                onClick={ () => { changeEntityHandler( MethodType.GET, EntityType.Condutor ) } }
            >
                Condutores
            </FilterItem>
            <FilterItem
                selected={ entity === EntityType.Veiculo }
                onClick={ () => { changeEntityHandler( MethodType.GET, EntityType.Veiculo ) } }
            >
                Veículos
            </FilterItem>
            <FilterItem
                selected={ entity === EntityType.Deslocamento }
                onClick={ () => { changeEntityHandler( MethodType.GET, EntityType.Deslocamento ) } }
            >
                Viagens
            </FilterItem>
        </FilterList>
    )
}