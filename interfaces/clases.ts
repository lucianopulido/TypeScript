(() => {
    interface Xmen {
        name: string,
        realName: string,

        mutantPower(id: number): string
    }

    interface Human {
        age: number
    }

    class Mutant implements Xmen, Human {
        public name: string;
        public realName: string;
        public age: number

        constructor() {
            this.name = 'Luciano'
            this.realName = 'Luciano'
            this.age = 25
        }


        mutantPower(id: number): string {
            return this.name + '' + this.realName;
        }

    }

})()