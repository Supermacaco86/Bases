(()=>{
    type Hero = {
        name:string,
        age: number, 
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable : (string | number | Hero ) = "Fernando";
    console.log(myCustomVariable);

    myCustomVariable = {
        name: "Bruce",
        age: 40,
        powers: ["ninguno"]
    };
    console.log( typeof myCustomVariable);
    console.log(myCustomVariable);

})()