function printToConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole
    } else {
        return () => {
        }
    }
}

const bloquearPrototipo = (constructor: Function) => {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

const checkValidPokemonId = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
    }
}

const readonly = (isWritable: boolean = true): Function => {
    return (target: any, propertyKey: string) => {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return 'Luciano'
            },

            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable
                })
            }
        }
        return descriptor
    }
}

@printToConsoleConditional(false)
export class Pokemon {
    name: string
    @readonly()
    private publicAPI: string

    constructor(name: string) {
        this.name = name
        this.publicAPI = 'https://pokeapi.co'
    }

    @checkValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en BD: ${id}`)
    }
}