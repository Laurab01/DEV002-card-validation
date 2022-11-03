import validator from './validator.js';


document.getElementById("open").addEventListener("click", () => {
    document.getElementById("contflotante").style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("contflotante").style.display = "none";
    document.getElementById("holder").value = "";
    document.getElementById("number").value = "";
    document.getElementById("cvc").value = "";

})
function maskify(CCardNumber) {
    document.getElementById("finalCard").innerHTML = validator.maskify(CCardNumber);
    document.getElementById("finalText").innerHTML = "La tarjeta es Valida.";
}

function tarjetaValida(creditCardNumber) {
    let valid = validator.isValid(creditCardNumber);
    if (valid === true) {
        return true;

    } else {
        alert("Tarjeta Invalida")
    }
}

function validar() {
    let infoName = document.getElementById("holder").value;
    let CCardNumber = document.getElementById("number").value;
    let cvcNumber = document.getElementById("cvc").value;
    if (infoName.length == "" || CCardNumber.length == "" || cvcNumber.length == "") {
        return false;
    }
    else {
        return true;
    }
}

document.getElementById("subs").addEventListener("click", () => {
    if (!validar()) {
        alert("Verificar los espacios vacios");
    }
    else {
        let CCardNumber = document.getElementById("number").value;
        const validtarjeta = tarjetaValida(CCardNumber);
        if (validtarjeta) {
            maskify(CCardNumber);
        }
    }
})