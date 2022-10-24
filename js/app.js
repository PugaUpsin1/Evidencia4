function promedio() {
    let arreglo1 = [];
    let par1 = document.getElementById('par');
    for(let i = 0 ; i<20 ; i++){
        arreglo1[i] = prompt("Ingresa un Numero: ");
    }
    let sum = 0;
    for(let i = 0 ; i<arreglo1.length ; i++){
        const elemento = arreglo1[i];
        sum += parseFloat(elemento);
    }
    let prom = sum / 5;
    par1.innerHTML = prom;
    console.log(prom)
    }