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
    console.log(prom);
    }

    function pares(){
        let arreglo2 = [];
        let par2 = document.getElementById('par2');
        for(let i = 0 ; i<20 ; i++){
            arreglo2[i]= parseInt(prompt("Ingresa un Numero: "));
        }
        let paresarray = [];
        for(let i = 0 ; i<arreglo2.length ; i++){
            let num = parseInt(arreglo2[i]);
            if(num % 2 === 0){
                paresarray.push(num);
            }
        }
        let res = paresarray;
        par2.innerHTML = res;
        console.log(res)
    }
    function orden(){
        let arreglo3 = [];
        let par3 = document.getElementById('par3');
        for(let i = 0 ; i<5 ; i++){
            arreglo3[i]= parseInt(prompt("Ingresa un Numero: "));
        }
        function comparar(a,b){return b - a}
    
        let res = arreglo3.sort(comparar);
        par3.innerHTML = res;
        console.log(res)
        }
    
    