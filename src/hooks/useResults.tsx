import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { EntityType } from '@/types/entityTypes'
import { useEntity } from './useEntity'
import { useMethod } from './useMethod'
import { useFormData } from './useFormData'
import { useIdd } from './useId'
import { buildQuery } from '@/utils/buildQuery'
import { buildForm } from '@/utils/buildForm'

const fetcher = ( query: { id: number, method: string, path: string }, form: string ): AxiosPromise<any> => {    
    const formJson = JSON.parse(form)    
    let data = { }

    switch ( query.method ) {
        case 'GET' || 'DELETE':
            data = { id: query.id }
            break
        default:
            data = {
                id: query.id,
                ...formJson
            }
    }

    return axios( { 
        method: query.method,
        url: query.path,
        data: data
    } )
}

export function useResults () {
    const { entity } = useEntity()
    const { method } = useMethod()
    const { idd } = useIdd()
    const { formData } = useFormData()

    if ( entity === EntityType.default ) {
        return {
            data: [],
            entity: EntityType[entity],
            fetchMethod: 'get',
            status: 200
        }
    }

    const query = buildQuery(idd, entity, method)
    const form = buildForm(formData)

    const { data, isLoading, isError } = useQuery( {
        queryFn: () => fetcher(query, form),
        queryKey: [ 'results', query ],
        refetchInterval: 60*3*1000
    } )

    if ( isLoading ) {
        return {
            data: [],
            entity: EntityType[entity],
            fetchMethod: '',
            status: 'loading'
        }
    } else if ( isError ) {
        return {
            data: [],
            entity: EntityType[entity],
            fetchMethod: '',
            status: 'error'
        }
    } else {
        return {
            data: data ? data.data : [],
            entity: EntityType[entity],
            fetchMethod: data?.config.method,
            status: data?.status
        }
    }
}