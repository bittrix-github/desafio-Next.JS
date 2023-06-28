"use client"

import { styled } from "styled-components"
import { useEntity } from "@/hooks/useEntity"
import { EntityType } from "@/types/entityTypes"
import { PrimaryInput } from "./primaryInput" 
import { PrimaryLabel } from "./primaryLabel"
import { PrimaryButton } from "./primaryButton"
import { VariantButton } from "./variantButton"
import { useFormData } from "@/hooks/useFormData"
import { useState } from "react"
import { useMethod } from "@/hooks/useMethod"
import { MethodType } from "@/types/methodTypes"
import { useUpdateForm } from "@/hooks/useUpdateForm"

interface FormBuilderProps {

}

const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55rem;
    
    @media (max-width: 800px) {
        width: 100%;
        flex-direction: column;
        align-items: start;
        gap: 1rem;

        & input {
            width: 100%;
            max-width: 50rem;
            margin-left: 50%;
            transform: translateX(-50%);
        }

        & label {
            width: 100%;
            max-width: 50rem;
            margin-left: 50%;
            transform: translateX(-50%);
        }

        & button {
            width: 100%;
            max-width: 50rem;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-bottom: 3rem;
        }
    }
`

export function FormList ( props: FormBuilderProps ) {

    const { entity } = useEntity()
    const { setUpdateForm } = useUpdateForm()
    const { setFormData } = useFormData()
    const { setMethod } = useMethod()

    const [ data, setData ] = useState( {
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',

        categoriaHabilitacao: '',
        vencimentoHabilitacao: '',

        kmAtual: '',

        kmFinal: '',
        fimDeslocamento: '',
        observacao: '',
    } )

    function cancelButtonHandler() {
        setUpdateForm( false )
    }

    function chageHandler (event: any) {
        setData( { ...data, [event.target.name]: event.target.value } )
    }

    function submitButtonHandler(event: any) {
        event.preventDefault()
        
        let form = { }

        switch ( EntityType[entity] ) {
            case 'Cliente':
                form = {
                    logradouro: data.logradouro,
                    numero: data.numero,
                    bairro: data.bairro,
                    cidade: data.cidade,
                    uf: data.uf
                }
                break
            case 'Condutor':
                form = {
                    categoriaHabilitacao: data.categoriaHabilitacao,
                    vencimentoHabilitacao: data.vencimentoHabilitacao
                }
                break
            case 'Veiculo':
                form = {
                    kmAtual: data.kmAtual
                }
                break
            default:
                form = { 
                    kmFinal: data.kmFinal,
                    fimDeslocamento: data.fimDeslocamento,
                    observacao: data.observacao,
                }
        }

        setFormData( form )
        setMethod( MethodType.PUT )
        setUpdateForm(false)
    }
    
    switch ( EntityType[entity] ) {
        case 'Cliente':
            return (
                <>
                    <h2>Atualizar dados do Funcionário</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Endereço:" htmlFor="_FuncionarioEndereco" />
                        <PrimaryInput
                            placeholder="Rua, logradouro..."
                            id="_FuncionarioEndereco" value={data.logradouro}
                            name="logradouro"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Número:" htmlFor="_FuncionarioNumero" />
                        <PrimaryInput
                            placeholder="Insira o número do endereço"
                            id="_FuncionarioNumero"
                            value={data.numero}
                            name="numero"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Bairro:" htmlFor="_FuncionarioBairro" />
                        <PrimaryInput
                        placeholder="Insira seu bairro"
                        id="_FuncionarioBairro"
                        value={data.bairro}
                        name="bairro"
                        onChange={ event => chageHandler(event) }
                    />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Cidade:" htmlFor="_FuncionarioCidade" />
                        <PrimaryInput
                            placeholder="Insira sua cidade"
                            id="_FuncionarioCidade"
                            value={data.cidade}
                            name="cidade"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Estado:" htmlFor="_FuncionarioEstado" />
                        <PrimaryInput
                            placeholder="Insira seu estado"
                            id="_FuncionarioEstado"
                            value={data.uf}
                            name="uf"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer style={ { marginTop: 5 + 'rem' } } >
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Atualizar</PrimaryButton>
                        <VariantButton onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>
            )
        case 'Condutor':
            return (
                <>
                    <h2>Atualizar dados do Condutor</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Categoria da CNH:" htmlFor="_CondutorCategoriaHabilitacao" />
                        <PrimaryInput
                            placeholder="Insira apenas letras"
                            id="_CondutorCategoriaHabilitacao"
                            value={data.categoriaHabilitacao}
                            name="categoriaHabilitacao"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Vencimento da CNH:" htmlFor="_CondutorVencimentoHabilitacao" />
                        <PrimaryInput
                            type="date"
                            id="_CondutorVencimentoHabilitacao"
                            value={data.vencimentoHabilitacao}
                            name="vencimentoHabilitacao"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer style={ { marginTop: 5 + 'rem' } } >
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Atualizar</PrimaryButton>
                        <VariantButton onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>
            )
        case 'Veiculo':
            return (
                <>
                    <h2>Atualizar dados do Veículo</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Quilometragem atual:" htmlFor="_VeiculoKmAtual" />
                        <PrimaryInput
                            placeholder="Insira a quilometragem atual do veículo"
                            id="_VeiculoKmAtual"
                            value={data.kmAtual}
                            name="kmAtual"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer style={ { marginTop: 5 + 'rem' } } >
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Atualizar</PrimaryButton>
                        <VariantButton onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>            
            )
        default:
            return (
                <>
                    <h2>Atualizar dados da Viagem</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Fim da viagem:" htmlFor="_ViagemInicioDeslocamento" />
                        <PrimaryInput
                            type="datetime-local"
                            id="_ViagemfimDeslocamento"
                            name="fimDeslocamento"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Quilometragem final:" htmlFor="_ViagemKmInicial" />
                        <PrimaryInput
                            placeholder="Insira a quilometragem final da viagem"
                            id="_ViagemKmFinal"
                            value={data.kmFinal}
                            name="kmFinal"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Observação:" htmlFor="_ViagemObservacao" />
                        <PrimaryInput
                            placeholder="Alguma observação sobre a viagem?"
                            id="_ViagemObservacao"
                            value={data.observacao}
                            name="observacao"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer style={ { marginTop: 5 + 'rem' } } >
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Atualizar</PrimaryButton>
                        <VariantButton onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>
            )
    }
}