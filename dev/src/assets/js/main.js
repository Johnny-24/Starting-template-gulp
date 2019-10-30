$(document).ready(function() {
    // Plugin svg4everybody
    svg4everybody({});

    // Polifill for IE objectFitImages
    objectFitImages();

    const a = "Hello";

    let b = () => {
        console.log(`${a} Johnny!`);
    };

    b();
});
