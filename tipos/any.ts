(()=>{
    let avenger: any = 123;
    let exists;
    let power;

    avenger = "Dr. Strange"
    console.log((avenger as string).charAt(0))

    avenger = 1234
    console.log((avenger as number).toFixed(2))
})()