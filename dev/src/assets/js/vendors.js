import $ from "jquery";
import inputMask from "./modules/inputmask";

document.addEventListener("DOMContentLoaded", function() {
    global.jQuery = $;
    global.$ = $;
    inputMask.run();
});

// import "svg4everybody";
// import "object-fit-images";
