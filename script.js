const h1 = document.getElementById("result");
const btn = document.getElementById("btn");
const t1 = document.getElementById("weight");
const t2 = document.getElementById("height");


btn.addEventListener("click", e => {
    handleSubmit(e);
})

function handleSubmit(e) {
    e.preventDefault();
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    if (weight && height) {
        const imc = weight / Math.pow(height, 2);

        h1.textContent = calculateIMC(imc);
    }

}

function calculateIMC(imc) {
    if (imc <= 16.9) {
        return "Muito abaixo do peso";
    } else if (imc <= 18.4) {
        return "Abaixo do peso";
    } else if (imc <= 24.9) {
        return "Peso normal";
    } else if (imc <= 29.9) {
        return "Acima do peso";
    } else if (imc <= 34.9) {
        return "Obesidade grau I";
    }else if (imc <= 40) {
        return "Obesidade grau II";
    }else {
        return "Obesidade grau III";
    }
    
}