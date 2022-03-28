var symbol = 0;
var last = document.getElementById("last-calc");
var result = document.getElementById("result");

function clean() {
    result = document.getElementById("result");

    last.innerText = "0";
    result.innerText = "0";
    symbol = 0;
    firstSymbol = true;
}

// Max = 19
function acr(string, type) {
    if (type === "symbol") {
        isSymbol(string);
    }

    result = document.getElementById("result");

    if (result.innerText.length > 16) {
        return alert("O limite máximo é de 17 caracteres.");
    }

    if (result.innerText === "0") {
        result.innerText = "";
    } else if (result.innerText === "0" && type === "symbol") {
        return (result.innerText = "0");
    }

    if (type !== "symbol") {
        result.innerText += String(string);
    }
}

function total() {
    result = document.getElementById("result");

    last.innerText = result.innerText;
    try {
        result.innerText = String(eval(result.innerText)).slice(0, 17);
    } catch (e) {
        alert("Não foi possível calcular, verifique a conta!");
    }
}

function removeLast() {
    result = document.getElementById("result");
    var list = result.innerText.split("");
    list.splice(-1, 1);

    result.innerText = list.join().replace(/\,/g, "");
    result = document.getElementById("result");
    if (result.innerText === "") result.innerHTML = "0";
}

function isSymbol(string) {
    result = document.getElementById("result");
    var list = result.innerText.split("");
    var idk = list.pop();

    if (["/", "*", "-", "+"].includes(idk)) {
        removeLast();
        acr(string);
    } else {
        acr(string);
    }
}
