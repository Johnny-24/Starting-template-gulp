import test from "./modules/test_module";

document.addEventListener("DOMContentLoaded", function() {
    test.run();
    let a = () => {
        alert("sss");
    };

    a();
});
