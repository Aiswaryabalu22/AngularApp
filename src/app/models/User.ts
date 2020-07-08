//interface can provide a schematic
export interface User{
    name: string,
    age?: number,
    address: {
        DoorNum: any,
        FlatNum: number,
        Street: string,
    },
    image: string,
    email: string,
    isActive?: boolean,
    balance?: number,
    registered?: any,
    hide?: boolean
} 

 