(() => {
    interface Client {
        name: string,
        age?: number,
        address: Address

        getFullAddress(id: string): string
    }

    interface Address {
        id: number,
        zip: number,
        city: string
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 999,
            city: 'Ottawa'
        },
        getFullAddress(id: string): string {
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'Melisa',
        age: 30,
        address: {
            id: 125,
            zip: 999,
            city: 'Ottawa'
        },
        getFullAddress(id: string): string {
            return this.address.city
        }
    }
})()