const formulario = document.querySelector("#formulario")
const inputEmail = document.querySelector("#email")
const inputAsunto = document.querySelector("#asunto")
const inputMensaje = document.querySelector("#mensaje")

inputAsunto.addEventListener("blur", validar)
inputEmail.addEventListener("blur", validar)
inputMensaje.addEventListener("blur", validar)

function validar(e) {
    if (e.target.value === "") {
        mostrarAlerta("El campo " + e.target.id + " no puede estar vacio", e.target.parentElement)
    }
    else {
        console.log("Todo OK")
    }
}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600")
    if (alerta) {
        alerta.remove()
    }
}

function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia)
    const error = document.createElement("p")
    error.textContent = mensaje
    error.classList.add("bg-red-600", "text-center", "text-white", "p-2")
    referencia.appendChild(error)
}