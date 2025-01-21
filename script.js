document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.");
        form.reset();
    });
});