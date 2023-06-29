"use client"

import { styled } from "styled-components"
import { useEntity } from "@/hooks/useEntity"
import { EntityType } from "@/types/entityTypes"
import { PrimaryInput } from "./primaryInput" 
import { PrimaryLabel } from "./primaryLabel"
import { PrimaryButton } from "./primaryButton"
import { VariantButton } from "./variantButton"
import { useRegisterForm } from "@/hooks/useRegisterForm"
import { useFormData } from "@/hooks/useFormData"
import { useState } from "react"
import { useMethod } from "@/hooks/useMethod"
import { MethodType } from "@/types/methodTypes"

interface FormBuilderProps {

}

const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65rem;

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
    const { setRegisterForm } = useRegisterForm()
    const { setFormData } = useFormData()
    const { setMethod } = useMethod()

    const [ data, setData ] = useState( {
        numeroDocumento: '',
        tipoDocumento: '',
        nome: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',

        numeroHabilitacao: '',
        categoriaHabilitacao: '',
        vencimentoHabilitacao: '',

        placa: '',
        marcaModelo: '',
        anoFabricacao: '',
        kmAtual: '',

        kmInicial: '',
        inicioDeslocamento: '',
        motivo: '',
        observacao: '',
        idCondutor: '',
        idVeiculo: '',
        idCliente: ''
    } )

    function cancelButtonHandler() {
        setRegisterForm(false)
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
                    numeroDocumento: data.numeroDocumento,
                    tipoDocumento: data.tipoDocumento,
                    nome: data.nome,
                    logradouro: data.logradouro,
                    numero: data.numero,
                    bairro: data.bairro,
                    cidade: data.cidade,
                    uf: data.uf
                }
                break
            case 'Condutor':
                form = {
                    nome: data.nome, 
                    numeroHabilitacao: data.numeroHabilitacao,
                    categoriaHabilitacao: data.categoriaHabilitacao,
                    vencimentoHabilitacao: data.vencimentoHabilitacao
                }
                break
            case 'Veiculo':
                form = { 
                    placa: data.placa,
                    marcaModelo: data.marcaModelo,
                    anoFabricacao: data.anoFabricacao,
                    kmAtual: data.kmAtual
                }
                break
            default:
                form = { 
                    kmInicial: data.kmInicial,
                    inicioDeslocamento: data.inicioDeslocamento,
                    motivo: data.motivo,
                    observacao: data.observacao,
                    idCondutor: data.idCondutor,
                    idVeiculo: data.idVeiculo,
                    idCliente: data.idCliente
                }
        }

        setFormData( form )
        setMethod( MethodType.POST )
        setRegisterForm(false)
    }
    
    switch ( EntityType[entity] ) {
        case 'Cliente':
            return (
                <>
                    <h2>Cadastrar novo Funcionário</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Nome:" htmlFor="_FuncionarioNome" />
                        <PrimaryInput
                            placeholder="Insira seu nome"
                            id="_FuncionarioNome"
                            value={data.nome}
                            name="nome"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Tipo de documento:" htmlFor="_FuncionarioTipoDocumento" />
                        <PrimaryInput
                            placeholder="Exemplo: CPF, RG, CNH..."
                            id="_FuncionarioTipoDocumento"
                            value={data.tipoDocumento}
                            name="tipoDocumento"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Número do documento:" htmlFor="_FuncionarioNumeroDocumento" />
                        <PrimaryInput
                            placeholder="Insira apenas números"
                            id="_FuncionarioNumeroDocumento"
                            value={data.numeroDocumento}
                            name="numeroDocumento"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
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
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Cadastrar</PrimaryButton>
                        <VariantButton style={ { marginRight: 14 + 'rem' } } onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>
            )
        case 'Condutor':
            return (
                <>
                    <h2>Cadastrar novo Condutor</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Nome:" htmlFor="_CondutorNome" />
                        <PrimaryInput
                            placeholder="Insira seu nome"
                            id="_CondutorNome"
                            value={data.nome}
                            name="nome"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Número da CNH:" htmlFor="_CondutorNumeroHabilitacao" />
                        <PrimaryInput
                            placeholder="Inisira apenas números"
                            id="_CondutorNumeroHabilitacao"
                            value={data.numeroHabilitacao}
                            name="numeroHabilitacao"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
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
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Cadastrar</PrimaryButton>
                        <VariantButton style={ { marginRight: 14 + 'rem' } } onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>
            )
        case 'Veiculo':
            return (
                <>
                    <h2>Cadastrar novo Veículo</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Modelo:" htmlFor="_VeiculoMarcaModelo" />
                        <PrimaryInput
                            placeholder="Insira fabricante e modelo do veículo"
                            id="_VeiculoMarcaModelo"
                            value={data.marcaModelo}
                            name="marcaModelo"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Ano de fabricação:" htmlFor="_VeiculoAnoFabricacao" />
                        <PrimaryInput
                            placeholder="Inisira o ano de fabricação do veículo"
                            id="_VeiculoAnoFabricacao"
                            value={data.anoFabricacao}
                            name="anoFabricacao"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Palca:" htmlFor="_VeiculoPlaca" />
                        <PrimaryInput
                            placeholder="Exemplo: AAA-0000, BBB0C00..."
                            id="_VeiculoPlaca"
                            value={data.placa}
                            name="placa"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
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
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Cadastrar</PrimaryButton>
                        <VariantButton style={ { marginRight: 14 + 'rem' } } onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>            
            )
        default:
            return (
                <>
                    <h2>Cadastrar nova Viagem</h2>
                    <FieldContainer>
                        <PrimaryLabel text="Inicio da viagem:" htmlFor="_ViagemInicioDeslocamento" />
                        <PrimaryInput
                            type="datetime-local"
                            id="_ViagemInicioDeslocamento"
                            name="inicioDeslocamento"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Quilometragem inicial:" htmlFor="_ViagemKmInicial" />
                        <PrimaryInput
                            placeholder="Insira a quilometragem inicial da viagem"
                            id="_ViagemKmInicial"
                            value={data.kmInicial}
                            name="kmInicial"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Motivo:" htmlFor="_ViagemMotivo" />
                        <PrimaryInput
                            placeholder="Breve descrição do motivo da viagem"
                            id="_ViagemMotivo"
                            value={data.motivo}
                            name="motivo"
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
                    <FieldContainer>
                        <PrimaryLabel text="Id do Funcionário:" htmlFor="_ViagemIdCliente" />
                        <PrimaryInput
                            placeholder="Insira o Id do Funcionário"
                            id="_ViagemIdCliente"
                            value={data.idCliente}
                            name="idCliente"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Id do Condutor:" htmlFor="_ViagemIdCondutor" />
                        <PrimaryInput
                            placeholder="Insira o Id do Condutor"
                            id="_ViagemIdCondutor"
                            value={data.idCondutor}
                            name="idCondutor"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <PrimaryLabel text="Id do Veículo:" htmlFor="_ViagemIdVeiculo" />
                        <PrimaryInput
                            placeholder="Insira o Id do Veículo"
                            id="_ViagemIdVeiculo"
                            value={data.idVeiculo}
                            name="idVeiculo"
                            onChange={ event => chageHandler(event) }
                        />
                    </FieldContainer>
                    <FieldContainer style={ { marginTop: 5 + 'rem' } } >
                        <PrimaryButton onClick={ event => { submitButtonHandler(event) } }>Cadastrar</PrimaryButton>
                        <VariantButton style={ { marginRight: 14 + 'rem' } } onClick={ () => { cancelButtonHandler() } }>Cancelar</VariantButton>
                    </FieldContainer>
                </>
            )
    }
}