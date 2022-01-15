function mega(qt = 6, numeros = []){
    if(qt < 6 && qt > 60){
        throw "Quantidade inválida!"
    }

    if(numeros.length === qt){
        return numeros.sort((n1,n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){
        return mega(qt, [...numeros, numeroAleatorio])
    } else {
        return mega(qt, numeros)
    }
}

console.log(mega())