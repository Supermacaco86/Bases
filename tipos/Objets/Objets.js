"use strict";
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaja en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        age: 64,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
