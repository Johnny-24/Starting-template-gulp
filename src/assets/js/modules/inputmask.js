let Inputmask = require("inputmask");

const inputMask = {
    run: function() {
        let phoneInput = document.querySelectorAll(".maskPhone");
        let im = new Inputmask("+7 (999) 999-9999");
        im.mask(phoneInput);
    }
};

module.exports = inputMask;
