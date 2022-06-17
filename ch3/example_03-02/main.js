// First wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    var theBody = document.querySelector("body");

    function toggleClass() {
        theBody.classList.toggle("OffCanvas-Active");
    }

    document.querySelector(".Header").addEventListener("click", toggleClass);

    function debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }

    var debouncedA = debounce(function() {
        theBody.classList.remove("OffCanvas-Active");
    }, 250);

    window.onresize = debouncedA;
});