var isKeyDown = false;

document.addEventListener('keydown', function (e) {
    isKeyDown = true;
});

document.addEventListener('keyup', function (e) {
    isKeyDown = false;
});

window.addEventListener('blur', function () {
    isKeyDown = false;
});
