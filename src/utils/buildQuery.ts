import { EntityType } from "@/types/entityTypes";
import { MethodType } from "@/types/methodTypes";

export function buildQuery ( id: number, entity: EntityType, method: MethodType ) {
    const url = 'https://api-deslocamento.herokuapp.com/api/v1'

    switch ( method ) {
        
        case MethodType.DELETE:
            return { id, method: MethodType[method], path: `${url}/${EntityType[entity]}/${id}` }
        case MethodType.PUT:
            if ( entity === EntityType.Deslocamento ) {
                return { id, method: MethodType[method], path: `${url}/${EntityType[entity]}/${id}/EncerrarDeslocamento` }
            } else {
                return { id, method: MethodType[method], path: `${url}/${EntityType[entity]}/${id}` }
            }
        case MethodType.POST:
            if ( entity === EntityType.Deslocamento ) {
                return { id, method: MethodType[method], path: `${url}/${EntityType[entity]}/IniciarDeslocamento` }
            } else {
                return { id, method: MethodType[method], path: `${url}/${EntityType[entity]}` }
            }
        default:
            return { id, method: MethodType[method], path: `${url}/${EntityType[entity]}` }
    }
}