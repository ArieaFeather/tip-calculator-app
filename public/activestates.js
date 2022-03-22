for (let i = 0; i < tipobj.length; i++) {
    tipobj[i].addEventListener("click", function () {
        for (let i = 0; i < tipobj.length; i++) {
            tipobj[i].classList.remove("active");
        }
        tipobj[i].classList.add("active");
    });
}

if (billInput.value.length === 0) {
    reset.style.opacity = 0.3;
} else {
    reset.style.opacity = 1;
}
