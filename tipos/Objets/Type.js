"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaja en el tiempo']
    };
    let Superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName);
})();
