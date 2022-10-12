(()=>{

    type Hero = {
        name:string,
        age: number, 
        powers: string[],
        getName?: () => string
    }
    
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaja en el tiempo']
    }

    let Superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName(){
            return this.name
        }
    }


    

    console.log(flash)
    console.log(Superman.getName)

})()