import $ from "jquery";
import svgForEverybody from "./modules/svgForEverybody";
import inputMask from "./modules/inputmask";

document.addEventListener("DOMContentLoaded", function() {
    global.jQuery = $;
    global.$ = $;
    svgForEverybody.run();
    inputMask.run();
});

// import "object-fit-images";
