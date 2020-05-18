$(document).ready(function () {
    // Svg for everybody
    svg4everybody();

    // Polifill for IE objectFitImages
    objectFitImages();

    // InputMask
    $(".phoneMask").inputmask("+7(999) 999-99-99");
});
