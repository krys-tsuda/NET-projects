// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


document.addEventListener('DOMContentLoaded', function () {
    const glitchWrapper = document.querySelector('.glitch-wrapper');

    glitchWrapper.addEventListener('mouseover', function () {
        this.classList.add('glitch-active');
    });

    glitchWrapper.addEventListener('mouseout', function () {
        this.classList.remove('glitch-active');
    });
});


