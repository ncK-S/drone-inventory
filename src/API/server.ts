let token = '0f60dd7a690021c16d51609f0e915ea73fadb1ff4f8d5d97'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async ( data: any = {} ) => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    update: async (id:string, data:any = {} ) => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    delete: async ( id:string ) => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}