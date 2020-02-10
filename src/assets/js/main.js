import $ from "jquery";
import svgForEverybody from "./modules/svgForEverybody";
import inputMask from "./modules/inputmask";
import customModule from "./modules/customModule";

document.addEventListener("DOMContentLoaded", function() {
    global.jQuery = $;
    global.$ = $;
    svgForEverybody.run();
    inputMask.run();
    customModule.run();
});
