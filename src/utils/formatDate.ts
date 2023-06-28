export function formatDate ( date: string ) {    
    const year = date.split('-')[0]
    const month = date.split('-')[1]
    const day = date.split('-')[2].split('T')[0]

    const formatedDate = `${day}/${month}/${year}`

    return ( formatedDate )
}