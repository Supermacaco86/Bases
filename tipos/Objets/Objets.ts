(()=>{
    let flash:{name: string, age: number, powers: string[], getName?: () => string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaja en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        age: 64,
        powers: ['Super fuerza'],
        getName(){
            return this.name
        }
    }

    console.log(flash.getName)

})()