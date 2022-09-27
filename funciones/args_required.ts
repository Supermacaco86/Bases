(()=>{
    const fullName =(firstName:string, lastName:string):string=>{
        return `${firstName} ${lastName}`;
    }
const name = fullName("Toni", "Stark");
console.log({name});

})()