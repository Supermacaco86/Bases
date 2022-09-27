"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "---"}`;
    };
    const name = fullName("Toni", "Stark");
    console.log({ name });
})();
