const camposObrigatorios = document.querySelector(".items")
const botaoEnviar = document.querySelector(".btn")
const inputs = document.querySelectorAll(".input")


inputs.forEach(input => {

    botaoEnviar.addEventListener('click', (e) => {
        e.preventDefault()

        const inputValue = input.value;

        if (inputValue === "") {
            camposObrigatorios.classList.add("error");
            camposObrigatorios.classList.remove("valid")
        } else {
            camposObrigatorios.classList.remove("error");
            camposObrigatorios.classList.add("valid");
        }


    });

});






